import React, {useEffect, useState} from 'react';

let SUSDRate = 0;
const GECKO_API = 'https://api.coingecko.com/api/v3/simple/token_price/optimistic-ethereum?contract_addresses=0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9&vs_currencies=gbp';
let fee = 0.985;

function WithdrawInputs(props) {
    const [UsdWithdrawAmount, setUsdWithdrawAmount] = useState('');
    const [GbpWithdrawAmount, setGbpWithdrawAmount] = useState('');
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
        const pattern = /^[0-9,. ]*$/;
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

    function handleWithdrawContinue(e) {
        e.preventDefault();
        setIsInputConfirmed(true);
    }

    return (
        <div>
            {!isInputConfirmed ?
                <div>
                    <p>Please enter a withdrawal amount:</p>
                    <p>Your account balance is ${props.max}</p>
                    <form>
                        <label htmlFor="UsdWithdrawAmount">Withdrawal Amount In USD($)</label>
                        <input type="text" id="UsdWithdrawAmount" name="UsdWithdrawAmount" maxLength="6" onChange={withdrawalInputChangeHandler} value={UsdWithdrawAmount}/>
                        {UsdWithdrawAmount < 20 && <p>Withdrawal amount must be at least £20</p>}
                        {UsdWithdrawAmount > props.max && <p>Withdrawal amount exceeds account balance</p>}
                        <div>
                            {isInputValid && <button onClick={handleWithdrawContinue}>Continue</button>}
                        </div>
                    </form>
                    <p>Your GBP withdrawal value is: {GbpWithdrawAmount === '' ? <span>£0</span> : <span>£{GbpWithdrawAmount}</span>}</p>
                </div>
            :
                <p>You are about to withdraw £{GbpWithdrawAmount}. Please press confirm to submit your withdrawal.</p>
            }
        </div>
    );
}

export default WithdrawInputs;
