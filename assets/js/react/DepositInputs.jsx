import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

let SUSDRate = 0;
let fee = 0.99;
const GECKO_API = 'https://api.coingecko.com/api/v3/simple/token_price/optimistic-ethereum?contract_addresses=0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9&vs_currencies=gbp';

const DepositInputs = () =>  {
    // state variables
    const [gbpDepositAmount, setGbpDepositAmount] = useState('');
    const [usdDepositAmount, setUsdDepositAmount] = useState('');

    // function that gets gbp->susd rate from coingecko api
    async function getRate() {
        const response = await fetch(GECKO_API);
        const jsonData = await response.json();
        SUSDRate = jsonData['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp'];
    }

    //useEffect hook that calls getRate() on component mount
    useEffect(() => {
        getRate();
    }, []);

    // event handlers for the two input fields
    function setGbpDepositAmountHandler(event) {
        setGbpDepositAmount(event.target.value);
        let UsdSum = ((event.target.value / SUSDRate) * fee);
        (UsdSum === 0) ? setUsdDepositAmount('') : setUsdDepositAmount(UsdSum.toFixed(2));
    }

    function setUsdDepositAmountHandler(event) {
        setUsdDepositAmount(event.target.value);
        let GbpSum = ((event.target.value * SUSDRate) * fee);
        (GbpSum === 0) ? setGbpDepositAmount('') : setGbpDepositAmount(GbpSum.toFixed(2));
    }

    function isUsdValid() {
        return usdDepositAmount > 0 || usdDepositAmount !== '';
    }

    return (
        <div>
            <form>
                <label htmlFor="GbpDepositAmount">Deposit Amount in GBP(£)</label>
                <input type="number" id="GbpDepositAmount" name="GbpDepositAmount" onChange={setGbpDepositAmountHandler} value={gbpDepositAmount}/>
                <br/>
                <label htmlFor="UsdDepositAmount">Deposit Amount In USD($)</label>
                <input type="number" id="UsdDepositAmount" name="UsdDepositAmount" onChange={setUsdDepositAmountHandler} value={usdDepositAmount}/>
            </form>
            {isUsdValid() ? <p>Your received amount will be ${usdDepositAmount}</p> : <p>Please enter a deposit amount</p>}
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