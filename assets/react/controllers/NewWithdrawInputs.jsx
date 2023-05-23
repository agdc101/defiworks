import React, {useEffect, useState} from 'react';

let SUSDRate = 0;
const GECKO_API = 'https://api.coingecko.com/api/v3/simple/token_price/optimistic-ethereum?contract_addresses=0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9&vs_currencies=gbp';
let fee = 0.985;

function WithdrawInputs(props) {
    const [UsdWithdrawAmount, setUsdWithdrawAmount] = useState('');
    const [isUsdValid, setIsUsdValid] = useState(false);
    const [conversionFetched, setConversionFetched] = useState(false);

    // function that checks if the USD amount is valid
    function checkUsdIsValid(value) {
        {(value >= 20) ? setIsUsdValid(true) : setIsUsdValid(false)};
    }

    // function that gets gbp->susd rate from coingecko api
    async function getRate() {
        const response = await fetch(GECKO_API);
        const jsonData = await response.json();
        SUSDRate = jsonData['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp'];
    }

    // function that checks if the USD amount is valid
    function checkAmountIsValid(gbp, usd) {
        {(gbp >= 20 && usd <= props.max) ? setInputIsValid(true) : setInputIsValid(false)};
    }

    // function that removes .00 from the end of the value if it exists
    function formatValue(value) {
        if (value.toString().slice(-3) === ".00") {
            return Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 });
        } else {
            return Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    }

    // useEffect hook that calls getRate() on component mount
    useEffect(() => {
        getRate()
            .then(() => {console.log('rate: ' + SUSDRate)});
    }, []);

    //validate input, regex check for letters etc, remove commas from the value, then format the value to have the correct commas
    function validateAndSetUsd(value) {
        const pattern = /^[0-9, ]*$/;
        if (!pattern.test(value)) return;

        let strippedVal = value.replace(/,/g, '');
        let formattedValue = Number(strippedVal).toLocaleString();

        (formattedValue === '0') ? setUsdWithdrawAmount('') : setUsdWithdrawAmount(formattedValue);
    }

    function withdrawalInputChangeHandler(event) {
        checkUsdIsValid(event.target.value.replace(/,/g, ''));
        validateAndSetUsd(event.target.value);
    }

    async function retrieveGbpConversion(event) {
        event.preventDefault();
        if (isUsdValid) {
            try {
                const response = await fetch('/create-withdrawal-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        usdWithdrawAmount: UsdWithdrawAmount,
                    }),
                });
                return await response.json()
            } catch (error) {
                console.error(error);
            }
        }
    }

    function ConfirmAndConvertUsd(event) {
        retrieveGbpConversion(event)
            .then(data => {
                console.log('Data received:', data.usd, data.gbp);

                const newElement = document.createElement("p");
                newElement.textContent = `The GBP value of your withdrawal will be $${data.gbp}`;
                const renderDiv = document.getElementById("gbpConversion");

                setConversionFetched(true);

                renderDiv.appendChild(newElement);

        }).catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <p>Please enter a withdrawal amount:</p>
            <p>Your account balance is ${props.max}</p>
            <form onSubmit={ConfirmAndConvertUsd}>
                <label htmlFor="UsdWithdrawAmount">Withdrawal Amount In USD($)</label>
                <input type="text" id="UsdWithdrawAmount" name="UsdWithdrawAmount" maxLength="6" onChange={withdrawalInputChangeHandler} value={UsdWithdrawAmount}/>
                {UsdWithdrawAmount > props.max && <p>Withdrawal amount exceeds account balance</p>}
                <button onClick={ConfirmAndConvertUsd}>Convert</button>
            </form>
            <div id="gbpConversion" ></div>
        </div>
    );
}

export default WithdrawInputs;
