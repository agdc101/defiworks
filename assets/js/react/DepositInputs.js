import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

let SUSDRate = 0;

const DepositInputs = () =>  {
    // state variables
    const [gbpDepositAmount, setGbpDepositAmount] = useState('');
    const [usdDepositAmount, setUsdDepositAmount] = useState('');

    // function that gets gbp->susd rate from coingecko api
    async function getRate() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/token_price/optimistic-ethereum?contract_addresses=0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9&vs_currencies=gbp");
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
        let sum = event.target.value / SUSDRate;
        setUsdDepositAmount(sum.toFixed(2));
    }

    function setUsdDepositAmountHandler(event) {
        setUsdDepositAmount(event.target.value);
        let sum = event.target.value * SUSDRate;
        setGbpDepositAmount(sum.toFixed(2));
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
        </div>
    );
}

// render the component if the element exists
if (document.getElementById('depositInputs')) {
    const root = ReactDOM.createRoot(document.getElementById('depositInputs'));
    root.render(
        <DepositInputs />
    );
}