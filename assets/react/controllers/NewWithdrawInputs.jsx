import React, {useEffect, useState} from 'react';

function WithdrawInputs(props) {
    const [UsdWithdrawAmount, setUsdWithdrawAmount] = useState('');
    const [isUsdValid, setIsUsdValid] = useState(false);
    const [conversionFetched, setConversionFetched] = useState(false);

    // function that checks if the USD amount is valid
    function checkUsdIsValid(value) {
        {(value >= 20 && value <= props.max) ? setIsUsdValid(true) : setIsUsdValid(false)};
    }

    //validate input, regex check for letters etc, remove commas from the value, then format the value to have the correct commas
    function validateAndSetUsd(value) {
        const pattern = /^[0-9, ]*$/;
        if (!pattern.test(value)) return;

        let strippedVal = value.replace(/,/g, '');
        let formattedValue = Number(strippedVal).toLocaleString();

        (formattedValue === '0') ? setUsdWithdrawAmount('') : setUsdWithdrawAmount(formattedValue);
    }

    function withdrawalInputChangeHandler(event) {
        const renderDiv = document.getElementById("gbpConversion");
        renderDiv.innerHTML = '';
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
                newElement.textContent = `The GBP value of your withdrawal will be £${data.gbp}`;
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
                {UsdWithdrawAmount.replace(/,/g, '') > props.max && <p>Withdrawal amount exceeds account balance</p>}
                {UsdWithdrawAmount < 20 && <p>Minimum withdrawal amount is $20</p>}
                {isUsdValid && <button onClick={ConfirmAndConvertUsd}>Convert</button>}
            </form>
            <div id="gbpConversion" ></div>
        </div>
    );
}

export default WithdrawInputs;
