import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

let SUSDRate = 0;
let fee = 0.985;
const GECKO_API = 'https://api.coingecko.com/api/v3/simple/token_price/optimistic-ethereum?contract_addresses=0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9&vs_currencies=gbp';

const DepositInputs = () =>  {
    // state variables
    const [gbpDepositAmount, setGbpDepositAmount] = useState('');
    const [usdDepositAmount, setUsdDepositAmount] = useState('');
    const [isGbpValid, setIsGbpValid] = useState(true);
    const [isUsdValid, setIsUsdValid] = useState(false);

    // function that gets gbp->susd rate from coingecko api
    async function getRate() {
        const response = await fetch(GECKO_API);
        const jsonData = await response.json();
        SUSDRate = jsonData['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp'];
    }

    // function that checks if the USD amount is valid
    function checkUsdIsValid(value) {
        console.log('usd: ' + value);
        console.log(typeof value);
        {(value > 0 || value !== '') ? setIsUsdValid(true) : setIsUsdValid(false)};
    }

    //validate input
    function validateAndSetAllInputs(value, currEvent) {
        const pattern = /^[0-9,. ]*$/;
        if (!pattern.test(value)) return;
        // check if the usd value is valid
        checkUsdIsValid(value);
        // remove commas from the value
        let strippedVal = value.replace(/,/g, '');
        // format the value to have the correct commas
        let formattedValue = Number(strippedVal).toLocaleString();

        if (currEvent === 'gbp') {
            setGbpDepositAmount(formattedValue);
            setOtherInput(strippedVal, 'gbp');
        } else {
            setUsdDepositAmount(formattedValue);
            setOtherInput(strippedVal, 'usd');
        }
    }

    // function that handles the click event on the continue button, adding gbp amount to the url
    function ConfirmDepositHandler(event) {
        event.preventDefault();
        if (isUsdValid) {
            window.location.href = '/deposit/confirm-deposit/GbpAmt=' + gbpDepositAmount + '&UsdAmt=' + usdDepositAmount;
        }
    }

    // helper function that sets the value of the other input field
    function setOtherInput(value, curr) {
        if (curr === 'gbp') {
            // calculate the usd sum and set to number.
            let usdSum = Number(((value / SUSDRate) * fee));
            // format the value to have the correct commas
            let formattedValue = usdSum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            (usdSum === 0) ? setUsdDepositAmount('') : setUsdDepositAmount(formattedValue);
        } else {
            let gbpSum = Number(((value * SUSDRate) / fee));
            let formattedValue = gbpSum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            // check if the value is less than 10, if so set to invalid.
            (gbpSum < 20) ? setIsGbpValid(false) : setIsGbpValid(true);
            // if 0, set to empty string
            (gbpSum === 0) ? setGbpDepositAmount('') : setGbpDepositAmount(formattedValue);
        }
    }

    // useEffect hook that calls getRate() on component mount
    useEffect(() => {
        getRate().then(() => {console.log('rate: ' + SUSDRate)});
    }, []);

    // event handlers for the two input fields
    function setGbpDepositAmountHandler(event) {
        // check if the value is less than 20, if so set to invalid.
        (event.target.value < 20) ? setIsGbpValid(false) : setIsGbpValid(true);
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
            {isUsdValid ? <p>Your account balance will be ${usdDepositAmount}</p> : <p>Please enter a deposit amount</p>}
            <a id="confirm-continue-btn" href="/deposit/confirm-deposit" onClick={ConfirmDepositHandler}>Continue</a>
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