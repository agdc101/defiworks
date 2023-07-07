import React from 'react';

function TransactionHistory (props){

   const deposits = props.userDeposits;

   console.log(deposits);

return (
      <div>
         <h1>Transaction History</h1>

      </div>
   );
}


export default TransactionHistory;