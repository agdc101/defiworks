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
    function setOtherInput(value, curr) {
        // Limit the value length to 8 characters
        if (curr === 'gbp') {
            let usdSum = ((value / SUSDRate) * fee);
            (usdSum === 0) ? setUsdDepositAmount('') : setUsdDepositAmount(usdSum.toFixed(2).toLocaleString());
        } else {
            let gbpSum = ((value * SUSDRate) / fee);
            (gbpSum < 10 || gbpSum > 10000) ? setIsGbpValid(false) : setIsGbpValid(true);
            (gbpSum === 0) ? setGbpDepositAmount('') : setGbpDepositAmount(gbpSum.toFixed(2).toLocaleString());
        }
    }

    // useEffect hook that calls getRate() on component mount
    useEffect(() => {
        getRate().then(() => {console.log('rate: ' + SUSDRate)});
    }, []);

    // event handlers for the two input fields
    function setGbpDepositAmountHandler(event) {
        const pattern = /^(\d+(\.\d*)?|\.\d+|\s*)$/;
        if (!pattern.test(event.target.value)) return;
        let number = +event.target.value;
        let formattedNumber = number.toLocaleString();
        console.log(formattedNumber);
        (event.target.value < 20) ? setIsGbpValid(false) : setIsGbpValid(true);

        setGbpDepositAmount(formattedNumber.toString());
        setOtherInput(event.target.value, 'gbp');
    }

    function setUsdDepositAmountHandler(event) {
        const pattern = /^(\d+(\.\d*)?|\.\d+|\s*)$/;
        if (!pattern.test(event.target.value)) return;

        setUsdDepositAmount(event.target.value.toLocaleString());
        setOtherInput(event.target.value, 'usd');
    }

    return (
        <div>
            <form>
                <label htmlFor="GbpDepositAmount">Deposit Amount in GBP(£)</label>
                <input type="text" id="GbpDepositAmount" name="GbpDepositAmount" maxLength="5" onChange={setGbpDepositAmountHandler} value={gbpDepositAmount}/>
                {!isGbpValid && <span>Deposit must at least £20 in value.</span>}
                <br/>
                <label htmlFor="UsdDepositAmount">Deposit Amount In USD($)</label>
                <input type="text" id="UsdDepositAmount" name="UsdDepositAmount" maxLength="5" onChange={setUsdDepositAmountHandler} value={usdDepositAmount}/>
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