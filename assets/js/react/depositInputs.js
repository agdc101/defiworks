import React from 'react';
import ReactDOM from 'react-dom/client';

const DepositInputs = () =>  {

    function consolelogsomething() {
        return console.log('This is a react component');
    }


    return (
        <div>
            <form>
                <label htmlFor="GbpDepositAmount">Deposit Amount in GBP(£)</label>
                <input type="number" id="GbpDepositAmount" name="GbpDepositAmount"/>
                <br/>
                <label htmlFor="UsdDepositAmount">Deposit Amount In USD($)</label>
                <input type="number" id="UsdDepositAmount" name="UsdDepositAmount"/>
            </form>
        </div>
    );

}

const root = ReactDOM.createRoot(document.getElementById('depositInputs'));
root.render(
    <DepositInputs />
);