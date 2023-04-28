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

    // function that gets gbp->susd rate from coingecko api
    async function getRate() {
        const response = await fetch(GECKO_API);
        const jsonData = await response.json();
        SUSDRate = jsonData['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp'];
    }

    // function that checks if the USD amount is valid
    function isUsdValid() {
        return usdDepositAmount > 0 || usdDepositAmount !== '';
    }

    // function that handles the click event on the continue button, adding gbp amount to the url
    function ConfirmDepositHandler(event) {
        event.preventDefault();
        if (isUsdValid()) {
            window.location.href = '/deposit/confirm-deposit/GbpAmt=' + gbpDepositAmount + '&UsdAmt=' + usdDepositAmount;
        }
    }

    // helper function that sets the value of the other input field
    function setValueHelper(value, curr) {
        if (curr === 'gbp') {
            let currSum = ((value / SUSDRate) * fee);
            (currSum === 0) ? setUsdDepositAmount('') : setUsdDepositAmount(currSum.toFixed(2));
        } else {
            let currSum = ((value * SUSDRate) / fee);
            (currSum < 10 || currSum > 10000) ? setIsGbpValid(false) : setIsGbpValid(true);
            (currSum === 0) ? setGbpDepositAmount('') : setGbpDepositAmount(currSum.toFixed(2));
        }
    }

    //useEffect hook that calls getRate() on component mount
    useEffect(() => {
        getRate().then(() => {console.log('rate: ' + SUSDRate)});
    }, []);

    // event handlers for the two input fields
    function setGbpDepositAmountHandler(event) {
        (event.target.value < 10 || event.target.value > 10000) ? setIsGbpValid(false) : setIsGbpValid(true);
        setGbpDepositAmount(event.target.value);
        setValueHelper(event.target.value, 'gbp');
    }

    function setUsdDepositAmountHandler(event) {
        setUsdDepositAmount(event.target.value);
        setValueHelper(event.target.value,'usd');
    }

    return (
        <div>
            <form>
                <label htmlFor="GbpDepositAmount">Deposit Amount in GBP(£)</label>
                <input type="number" id="GbpDepositAmount" name="GbpDepositAmount" onChange={setGbpDepositAmountHandler} value={gbpDepositAmount}/>
                {!isGbpValid && <span>Deposit must be between £10 and £10,000 in value.</span>}
                <br/>
                <label htmlFor="UsdDepositAmount">Deposit Amount In USD($)</label>
                <input type="number" id="UsdDepositAmount" name="UsdDepositAmount" onChange={setUsdDepositAmountHandler} value={usdDepositAmount}/>
            </form>
            {isUsdValid() ? <p>Your account balance will be ${usdDepositAmount}</p> : <p>Please enter a deposit amount</p>}
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