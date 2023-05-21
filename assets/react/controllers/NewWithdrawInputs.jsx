import React, {useEffect, useState} from 'react';

let SUSDRate = 0;
const GECKO_API = 'https://api.coingecko.com/api/v3/simple/token_price/optimistic-ethereum?contract_addresses=0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9&vs_currencies=gbp';
let fee = 0.985;

function WithdrawInputs(props) {
    const [UsdWithdrawAmount, setUsdWithdrawAmount] = useState('');
    const [GbpWithdrawAmount, setGbpWithdrawAmount] = useState('');
    const [sortCode, setSortCode] = useState('');
    const [accountNo, setAccountNo] = useState('');
    const [pinNo, setPinNo] = useState('');
    const [isInputValid, setInputIsValid] = useState(false);
    const [isInputConfirmed, setIsInputConfirmed] = useState(false);

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

    function setUsdValidateGbp(value) {
        const pattern = /^[0-9, ]*$/;
        if (!pattern.test(value)) return;

        let strippedVal = value.replace(/,/g, '');
        let formattedUsdValue = Number(strippedVal).toLocaleString();

        let gbpSum = ((strippedVal * SUSDRate) / fee);
        checkAmountIsValid(gbpSum, formattedUsdValue);

        (formattedUsdValue === '0') ? setUsdWithdrawAmount('') : setUsdWithdrawAmount(formattedUsdValue);

        let formattedGbpValue = formatValue(gbpSum);
        (gbpSum === 0) ? setGbpWithdrawAmount('') : setGbpWithdrawAmount(formattedGbpValue);

    }

    function withdrawalInputChangeHandler(event) {
        setUsdValidateGbp(event.target.value);
    }

    function sortChangeHandler(event) {
        setSortCode(event.target.value);
    }

    function accountChangeHandler(event) {
        setAccountNo(event.target.value);
    }

    function pinChangeHandler(event){
        const pattern = /^[0-9 ]*$/;
        if (!pattern.test(event.target.value)) return;
        setPinNo(event.target.value);
    }

    function handlePinSubmission(e) {
        e.preventDefault();
        //fetch post request to /withdraw with gbp amount
        fetch('/verify-pin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pinNo: pinNo,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data.message);

                //if data.message equals

                setIsInputConfirmed(true);
                //shows confirm withdraw button
                document.getElementById('hidden-withdraw-form').style.display = 'block';
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    function handleWithdrawContinue(e) {
        e.preventDefault();
        if (isInputValid) {
            //fetch post request to /withdraw with gbp amount
            fetch('/create-withdraw-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    gbpWithdrawAmount: GbpWithdrawAmount,
                    usdWithdrawAmount: UsdWithdrawAmount,
                    sortCode: sortCode,
                    accountNo: accountNo,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setIsInputConfirmed(true);
                    //shows confirm withdraw button
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }
    return (
        <div>
            {!isInputConfirmed ?
                <div>
                    <p>Please enter a withdrawal amount:</p>
                    <p>Your account balance is ${props.max}</p>
                    <form onSubmit={handleWithdrawContinue}>
                        <fieldset>
                            <label htmlFor="UsdWithdrawAmount">Withdrawal Amount In USD($)</label>
                            <input type="text" id="UsdWithdrawAmount" name="UsdWithdrawAmount" maxLength="6" onChange={withdrawalInputChangeHandler} value={UsdWithdrawAmount}/>
                            {GbpWithdrawAmount < 20 && <p>Withdrawal amount must be at least £20</p>}
                            {UsdWithdrawAmount > props.max && <p>Withdrawal amount exceeds account balance</p>}
                        </fieldset>
                        {isInputValid &&
                            <fieldset>
                                <p>Name: {props.name} </p>
                                <label htmlFor="sort">Sort Code:</label>
                                <input type="sort" id="sort" name="sort" maxLength="6" onChange={sortChangeHandler} value={sortCode}/>
                                <label htmlFor="account">Account Number:</label>
                                <input type="account" id="account" name="account" maxLength="8" onChange={accountChangeHandler} value={accountNo}/><br/>
                                <button onClick={handleWithdrawContinue}>Continue</button>
                            </fieldset>}
                    </form>
                    <p>Your GBP withdrawal value is: {GbpWithdrawAmount === '' ? <span>£0</span> : <span>£{GbpWithdrawAmount}</span>}</p>
                </div>
                :
                <form onSubmit={handlePinSubmission}>
                    <p>Please enter your pin to confirm your withdrawal:</p>
                    <label htmlFor="pin">Pin:</label>
                    <input type="text" id="pin" name="pin" maxLength="6" onChange={pinChangeHandler} value={pinNo}/>
                    <button onClick={handlePinSubmission}>Confirm Pin</button>
                </form>

                // <p>You are about to withdraw £{GbpWithdrawAmount}. Please press confirm to submit your withdrawal.</p>
            }
        </div>
    );
}

export default WithdrawInputs;
