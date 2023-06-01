import React, {useState} from 'react';

const DepositInputs = () =>  {
    // state variables
    const [gbpDepositAmount, setGbpDepositAmount] = useState('');
    const [isGbpValid, setIsGbpValid] = useState(false);
    const [conversionFetched, setConversionFetched] = useState(false);
    const conversionDiv = document.getElementById("usdConversion");

    // function that checks if the USD amount is valid
    function checkGbpIsValid(value) {
        {(value >= 20) ? setIsGbpValid(true) : setIsGbpValid(false)};
    }

    function switchButtons (bool) {
        document.getElementById("GbpDepositAmount").disabled = bool;
        document.getElementById("convert-btn").disabled = bool;
    }

    //validate input, regex check for letters etc, remove commas from the value, then format the value to have the correct commas
    function validateAndSetGbp(value) {
        const pattern = /^[0-9, ]*$/;
        if (!pattern.test(value)) return;

        let strippedVal = value.replace(/,/g, '');
        let formattedValue = Number(strippedVal).toLocaleString();

        (formattedValue === '0') ? setGbpDepositAmount('') : setGbpDepositAmount(formattedValue);
    }

    async function retrieveUsdConversion(event) {
        event.preventDefault();
        if (isGbpValid) {
            try {
                const response = await fetch('/create-deposit-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        gbpDepositAmount: gbpDepositAmount,
                    }),
                });
                return await response.json()
            } catch (error) {
                console.error(error);
            }
        }
    }

    function ConfirmAndConvertGbp(event) {
        //disable the GbpDepositAmount input field
        switchButtons(true);
        event.preventDefault();
        conversionDiv.innerHTML = '';

        if (isGbpValid) {
            retrieveUsdConversion(event)
                .then(data => {
                    console.log('Data received:', data.usd, data.gbp);
                    const newElement = document.createElement("p");
                    newElement.textContent = `The USD value of your deposit will be $${data.usd}`;
                    setConversionFetched(true);
                    conversionDiv.appendChild(newElement);

                }).catch(error => {
                console.error('Error:', error);
            });
        }
    }

    // event handlers for the two input fields
    function setGbpDepositAmountHandler(event) {
        checkGbpIsValid(event.target.value.replace(/,/g, ''));
        validateAndSetGbp(event.target.value, 'gbp');
    }

    function handleConversionReset(event) {
        event.preventDefault();
        switchButtons(false);
        conversionDiv.innerHTML = '';
        setConversionFetched(false);
    }

    return (
        <div>
            <div>
                <h3>Enter amount to deposit:</h3>
                <form onSubmit={ConfirmAndConvertGbp}>
                    <label htmlFor="GbpDepositAmount">Deposit Amount in GBP(£)</label>
                    <input type="text" id="GbpDepositAmount" name="GbpDepositAmount" maxLength="6" onChange={setGbpDepositAmountHandler} value={gbpDepositAmount}/>
                    {gbpDepositAmount < 20 && <span>Deposit must at least £20 in value.</span>}
                    <br/>
                    <button id="convert-btn" onClick={ConfirmAndConvertGbp} disabled={!isGbpValid} >Convert</button>
                </form>
            </div>

            <div id="usdConversion">

            </div>
            {isGbpValid && conversionFetched ?
                <div>
                    <a id="confirm-continue-btn" href="/deposit/deposit-details" >Continue</a>
                    <button id="reset-btn" onClick={handleConversionReset}>Reset</button>
                </div>
                :
                <p>Please enter a deposit amount and convert to USD.</p>
            }
        </div>
    );
}

export default DepositInputs;