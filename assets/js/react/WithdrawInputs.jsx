import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom/client";

let SUSDRate = 0;
const GECKO_API = 'https://api.coingecko.com/api/v3/simple/token_price/optimistic-ethereum?contract_addresses=0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9&vs_currencies=gbp';
let fee = 0.985;

function WithdrawInputs(userBalance) {
    const [UsdWithdrawAmount, setUsdWithdrawAmount] = useState('');
    const [GbpWithdrawAmount, setGbpWithdrawAmount] = useState('');
    const [isGbpValid, setIsGbpValid] = useState(false);

    // function that gets gbp->susd rate from coingecko api
    async function getRate() {
        const response = await fetch(GECKO_API);
        const jsonData = await response.json();
        SUSDRate = jsonData['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp'];
    }

    // function that checks if the USD amount is valid
    function checkGbpIsValid(value) {
        {(value >= 20) ? setIsGbpValid(true) : setIsGbpValid(false)};
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

        (formattedUsdValue === '0') ? setUsdWithdrawAmount('') : setUsdWithdrawAmount(formattedUsdValue);

        let gbpSum = ((strippedVal * SUSDRate) / fee);
        checkGbpIsValid(gbpSum);
        let formattedGbpValue = formatValue(gbpSum);
        (gbpSum === 0) ? setGbpWithdrawAmount('') : setGbpWithdrawAmount(formattedGbpValue);

    }

    function withdrawalInputChangeHandler(event) {
        setUsdValidateGbp(event.target.value, 'usd');
    }

    return (
        <div>
            <p>Please enter a withdrawal amount:</p>
            <form>
                <label htmlFor="UsdWithdrawAmount">Withdrawal Amount In USD($)</label>
                <input type="text" id="UsdWithdrawAmount" name="UsdWithdrawAmount" maxLength="6" onChange={withdrawalInputChangeHandler} value={UsdWithdrawAmount}/>
            </form>
            {GbpWithdrawAmount <= 0 || !isGbpValid ? <p>Please enter a withdrawal amount of at least £20 in value</p> : <p> The £GBP value of your withdrawal is £{GbpWithdrawAmount}</p>}
        </div>
    );
}

// // render the component if the element exists
if (document.getElementById('withdrawInputs')) {
    const root = ReactDOM.createRoot(document.getElementById('withdrawInputs'));
    root.render(
        <WithdrawInputs />
    );
}