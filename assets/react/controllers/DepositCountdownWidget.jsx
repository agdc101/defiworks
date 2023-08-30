// import React, {useState} from 'react';

// const DepositCountdown = (props) =>  {
//     // state variables
//     const [clock, setClock] = useState(2);

//     //countdown function
//     function countdown() {
//         if (clock === 0) {
//             //if clock is 0, make a fetch call to set deposit session as null.
//             return;
//         }
//         setClock(clock - 1);
//     }

//     setTimeout(countdown, 1000);

//     return (
//         <div>
//             <h1>Deposit Details:</h1>

//             <span>Please send and confirm deposit before countdown expires.</span>
//             <p>Deposit request expires in: {clock}</p>

//             {clock === 0 ? <p>Deposit request has expired. Please request a <a className="" href="/deposit">new deposit</a></p> 
//             : 
//             <div>
//                 <div className="bank-details">
//                     <h4>Account Name : DeFi Works</h4>
//                     <p>Sort: 04-03-33</p>
//                     <p>Account No: 68972060</p>
//                 </div>
//                 <div id="usdConversion">
//                     <h3>Your amount to deposit is £{props.gbpDeposit}</h3>
//                     <p>Please press confirm button when deposit has been sent.</p>
//                 </div>
//             </div>}
//         </div>
//     );
// } 

// export default DepositCountdown;