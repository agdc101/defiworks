import React, {useState, useEffect} from 'react';

const DepositInputs = () =>  {
    // state variables
    const [gbpDepositAmount, setGbpDepositAmount] = useState('');
    const [isGbpValid, setIsGbpValid] = useState(false);
    const [conversionFetched, setConversionFetched] = useState(false);

    // function that checks if the USD amount is valid
    function checkGbpIsValid(value) {
        {(value >= 20) ? setIsGbpValid(true) : setIsGbpValid(false)};
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
        retrieveUsdConversion(event)
            .then(data => {
                console.log('Data received:', data.usd, data.gbp);

                const newElement = document.createElement("p");
                newElement.textContent = `The USD value of your deposit will be $${data.usd}`;
                const renderDiv = document.getElementById("usdConversion");

                setConversionFetched(true);

                renderDiv.appendChild(newElement);

        }).catch(error => {
            console.error('Error:', error);
        });
    }

    // event handlers for the two input fields
    function setGbpDepositAmountHandler(event) {
        const renderDiv = document.getElementById("usdConversion");
        renderDiv.innerHTML = '';
        checkGbpIsValid(event.target.value.replace(/,/g, ''));
        validateAndSetGbp(event.target.value, 'gbp');
    }

    return (
        <div>
            <h3>Enter amount to deposit:</h3>
            <form onSubmit={ConfirmAndConvertGbp}>
                <label htmlFor="GbpDepositAmount">Deposit Amount in GBP(£)</label>
                <input type="text" id="GbpDepositAmount" name="GbpDepositAmount" maxLength="6" onChange={setGbpDepositAmountHandler} value={gbpDepositAmount}/>
                {gbpDepositAmount < 20 && <span>Deposit must at least £20 in value.</span>}
                <br/>
                <button onClick={ConfirmAndConvertGbp}>Convert</button>
            </form>
            <div id="usdConversion">

            </div>
            {isGbpValid && conversionFetched ?
                <div>
                    <a id="confirm-continue-btn" href="/deposit/deposit-details" >Continue</a>
                </div>
                :
                <p>Please enter a deposit amount and convert to USD.</p>}
        </div>
    );
}

export default DepositInputs;