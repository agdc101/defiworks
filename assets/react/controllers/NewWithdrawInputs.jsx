import React, {useState} from 'react';

function WithdrawInputs(props) {
    const [usdWithdrawAmount, setUsdWithdrawAmount] = useState('');
    const [isUsdValid, setIsUsdValid] = useState(false);
    const [conversionFetched, setConversionFetched] = useState(false);
    const conversionDiv = document.getElementById("gbpConversion");

    // function that checks if the USD amount is valid
    function checkUsdIsValid(value) {
        {(value >= 20 && value <= props.max) ? setIsUsdValid(true) : setIsUsdValid(false)};
    }

    function switchButtons (bool) {
        document.getElementById("UsdWithdrawAmount").disabled = bool;
        document.getElementById("convert-btn").disabled = bool;
    }

    //validate input, regex check for letters etc, remove commas from the value, then format the value to have the correct commas
    function validateAndSetUsd(value) {
        const pattern = /^[0-9,. ]*$/;
        if (!pattern.test(value)) return;

        let strippedVal = value.replace(/,/g, '');

        //if strippedVal ends in a decimal point, add a 01 to the end
        if (strippedVal.endsWith('.') || strippedVal.endsWith('.0')) {
            setUsdWithdrawAmount(strippedVal);
            setIsUsdValid(false);
        } else {
            let formattedValue = Number(strippedVal).toLocaleString();
            (formattedValue === '0') ? setUsdWithdrawAmount('') : setUsdWithdrawAmount(formattedValue);
        }
    }

    function setToMax() {
        validateAndSetUsd(props.max.toString());
        checkUsdIsValid(props.max);
    }

    function withdrawalInputChangeHandler(event) {
        checkUsdIsValid(event.target.value.replace(/,/g, ''));
        validateAndSetUsd(event.target.value.toString());
    }

    function handleConversionReset(event) {
        event.preventDefault();
        switchButtons(false);
        conversionDiv.innerHTML = '';
        setConversionFetched(false);
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
        switchButtons(true);
        fetchData(event, 'usdConversion')
            .then(data => {
                const newElement = document.createElement("p");
                newElement.textContent = `The GBP value of your withdrawal will be £${data.gbp}`;
                //if data.gbp is less than 20, display a message saying that the withdrawal amount is less than £20
                if (+data.usd >= 20) {
                    conversionDiv.appendChild(newElement);
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
            </form>
            <button onClick={setToMax} >Max</button>
            {isUsdValid && <button id="convert-btn" onClick={ConfirmAndConvertUsd}>Convert</button>}

            <div id="gbpConversion" ></div>

            {isUsdValid && conversionFetched ?
                <div>
                    <a id="confirm-continue-btn" href="/withdraw/withdraw-details" >Continue</a>
                    <button id="reset-btn" onClick={handleConversionReset}>Reset</button>
                </div>
                :
                <p>Please enter a deposit amount and convert to USD.</p>
            }

        </div>
    );
}

export default WithdrawInputs;
