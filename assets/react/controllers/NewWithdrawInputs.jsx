import React, {useEffect, useState} from 'react';

function WithdrawInputs(props) {
    const [usdWithdrawAmount, setUsdWithdrawAmount] = useState('');
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

    // async function retrieveGbpConversion(event, requestType) {
    //     event.preventDefault();
    //     if (isUsdValid) {
    //         try {
    //             const response = await fetch('/create-withdrawal-session', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     usdWithdrawAmount: usdWithdrawAmount,
    //                 }),
    //             });
    //             return await response.json()
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // }
    //
    // async function validateWithdrawValue(event, requestType) {
    //     event.preventDefault();
    //     if (isUsdValid) {
    //         try {
    //             const response = await fetch('/verify-withdrawal-amount', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     param: 'verifyWithdrawal',
    //                     usdWithdrawAmount: usdWithdrawAmount,
    //                 }),
    //             });
    //             return await response.json()
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // }

    async function fetchData(event, requestType) {
        event.preventDefault();
        if (isUsdValid) {
            let api;
            if (requestType === 'usdConversion') {
                api = '/create-withdrawal-session';
            } else {
                api = '/verify-withdrawal-amount';
            }
            try {
                const response = await fetch(api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        param: requestType,
                        usdWithdrawAmount: usdWithdrawAmount,
                    }),
                });
                return await response.json()
            } catch (error) {
                console.error(error);
            }
        }
    }

    function ConfirmAndConvertUsd(event) {
        fetchData(event, 'usdConversion')
            .then(data => {
                console.log('Data received:', data.usd, data.gbp);

                const newElement = document.createElement("p");
                newElement.textContent = `The GBP value of your withdrawal will be £${data.gbp}`;
                //if data.gbp is less than 20, display a message saying that the withdrawal amount is less than £20
                console.log(data.gbp, data.usd);
                if (+data.usd >= 20) {
                    const renderDiv = document.getElementById("gbpConversion");
                    renderDiv.appendChild(newElement);
                }
                setConversionFetched(true);

        }).catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <p>Please enter a withdrawal amount and convert to GBP:</p>
            <p>Your account balance is ${props.max}</p>
            <form onSubmit={ConfirmAndConvertUsd}>
                <label htmlFor="UsdWithdrawAmount">Withdrawal Amount In USD($)</label>
                <input type="text" id="UsdWithdrawAmount" name="UsdWithdrawAmount" maxLength="6" onChange={withdrawalInputChangeHandler} value={usdWithdrawAmount}/>
                {usdWithdrawAmount.replace(/,/g, '') > props.max && <span>Withdrawal amount exceeds account balance</span>}
                {usdWithdrawAmount < 20 && <span>Minimum withdrawal amount is $20</span>}
                {isUsdValid && <button onClick={ConfirmAndConvertUsd}>Convert</button>}
            </form>
            <div id="gbpConversion" ></div>
            {conversionFetched && <button onClick={validateWithdrawValue}>Continue</button>}
        </div>
    );
}

export default WithdrawInputs;
