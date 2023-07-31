import React from 'react';

function TransactionItem(props) {
   return (
      <tbody>
         <tr>
            <td>{props.id}</td>
            <td>${props.usd}</td>
            <td>£{props.gbp}</td>
            <td>{props.timestamp}</td>
            <td>{props.isVerified ? 'verified' : 'not verified'}</td>
         </tr>
      </tbody>
   );
}

export default TransactionItem;