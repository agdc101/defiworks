import React, {useState} from 'react';
import ReactDOM from "react-dom/client";

function WithdrawInputs() {
    const [UsdWithdrawAmount, setUsdWithdrawAmount] = useState('');

    function withdrawalChangeHandler(event) {
        setUsdWithdrawAmount(event.target.value);
    }

    return (
        <div>
            <p>Please enter a withdrawal amount:</p>
            <form>
                <label htmlFor="UsdWithdrawAmount">Withdrawal Amount In USD($)</label>
                <input type="text" id="UsdWithdrawAmount" name="UsdWithdrawAmount" maxLength="6" onChange={withdrawalChangeHandler} value={UsdWithdrawAmount}/>
            </form>

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