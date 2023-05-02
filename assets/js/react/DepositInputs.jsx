import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

let SUSDRate = 0;
let fee = 0.9875;
const GECKO_API = 'https://api.coingecko.com/api/v3/simple/token_price/optimistic-ethereum?contract_addresses=0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9&vs_currencies=gbp';

const DepositInputs = () =>  {
    // state variables
    const [gbpDepositAmount, setGbpDepositAmount] = useState('');
    const [usdDepositAmount, setUsdDepositAmount] = useState('');
    const [isGbpValid, setIsGbpValid] = useState(false);

    // function that gets gbp->susd rate from coingecko api
    async function getRate() {
        const response = await fetch(GECKO_API);
        const jsonData = await response.json();
        SUSDRate = jsonData['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp'];
    }

    // function that checks if the USD amount is valid
    function checkGbpIsValid(value) {
        {(value > 20) ? setIsGbpValid(true) : setIsGbpValid(false)};
    }

    //validate input, regex check for letters etc, remove commas from the value, then format the value to have the correct commas
    function validateAndSetAllInputs(value, currEvent) {
        const pattern = /^[0-9,. ]*$/;
        if (!pattern.test(value)) return;

        let strippedVal = value.replace(/,/g, '');
        let formattedValue = Number(strippedVal).toLocaleString();

        if (currEvent === 'gbp') {
            (formattedValue === '0') ? setGbpDepositAmount('') : setGbpDepositAmount(formattedValue);
            setOtherInput(strippedVal, 'gbp');
        } else {
            (formattedValue === '0') ? setUsdDepositAmount('') : setUsdDepositAmount(formattedValue);
            setOtherInput(strippedVal, 'usd');
        }
    }

    // function that handles the click event on the continue button, adding gbp amount to the url
    function ConfirmDepositHandler(event) {
        event.preventDefault();
        if (isGbpValid) {
            window.location.href = '/deposit/confirm-deposit/GbpAmt=' + gbpDepositAmount + '&UsdAmt=' + usdDepositAmount;
        }
    }

    // function that formats the value to have the correct commas and decimal places
    function formatValue(value) {
        if (value.toString().slice(-3) === ".00") {
            return Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 });
        } else {
            return Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    }

    function setOtherInput(value, currency) {
        if (currency === 'gbp') {
            let usdSum = ((value / SUSDRate) * fee);
            let formattedValue = formatValue(usdSum);
            (usdSum === 0) ? setUsdDepositAmount('') : setUsdDepositAmount(formattedValue);
        } else {
            let gbpSum = ((value * SUSDRate) / fee);
            checkGbpIsValid(gbpSum);
            let formattedValue = formatValue(gbpSum);
            (gbpSum === 0) ? setGbpDepositAmount('') : setGbpDepositAmount(formattedValue);
        }
    }

    // useEffect hook that calls getRate() on component mount
    useEffect(() => {
        getRate().then(() => {console.log('rate: ' + SUSDRate)});
    }, []);

    // event handlers for the two input fields
    function setGbpDepositAmountHandler(event) {
        checkGbpIsValid(event.target.value);
        validateAndSetAllInputs(event.target.value, 'gbp');
    }

    function setUsdDepositAmountHandler(event) {
        validateAndSetAllInputs(event.target.value, 'usd');
    }

    return (
        <div>
            <form>
                <label htmlFor="GbpDepositAmount">Deposit Amount in GBP(£)</label>
                <input type="text" id="GbpDepositAmount" name="GbpDepositAmount" maxLength="6" onChange={setGbpDepositAmountHandler} value={gbpDepositAmount}/>
                {!isGbpValid && <span>Deposit must at least £20 in value.</span>}
                <br/>
                <label htmlFor="UsdDepositAmount">Deposit Amount In USD($)</label>
                <input type="text" id="UsdDepositAmount" name="UsdDepositAmount" maxLength="6" onChange={setUsdDepositAmountHandler} value={usdDepositAmount}/>
            </form>
            {isGbpValid ?
                <div>
                    <p>Your account balance will be ${usdDepositAmount}</p>
                    <a id="confirm-continue-btn" href="/deposit/confirm-deposit" onClick={ConfirmDepositHandler} >Continue</a>
                </div>
                :
                <p>Please enter a deposit amount</p>}
        </div>
    );
}

// // render the component if the element exists
if (document.getElementById('depositInputs')) {
    const root = ReactDOM.createRoot(document.getElementById('depositInputs'));
    root.render(
        <DepositInputs />
    );
}