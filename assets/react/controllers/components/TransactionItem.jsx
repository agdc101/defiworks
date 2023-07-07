import React from 'react';

function TransactionItem(props) {

   //remove time from timestamp
   const date = new Date(props.timestamp.date);

   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Transaction ID</th>
                  <th>USD Amount</th>
                  <th>GBP Amount</th>
                  <th>Timestamp</th>
                  <th>Verified</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>{props.id}</td>
                  <td>{props.usd}</td>
                  <td>{props.gbp}</td>
                  {/*<td>{date}</td>*/}
                  <td>{props.isVerified ? 'true' : 'false'}</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default TransactionItem;