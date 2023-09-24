import React, { useState, useMemo } from 'react';
import TransactionItem from './components/TransactionItem';

function TransactionHistory({ deposits, withdrawals }) {
   const [selected, setSelected] = useState('');

   function handleSelectChange(event) {
      setSelected(event.target.value);
   }

   const transactionList = useMemo(() => {
      const transactions = selected === 'withdrawals'
      ? withdrawals
      : selected === 'deposits'
      ? deposits
      : [];
     

      return transactions.map((transaction, index) => (
         <TransactionItem
            key={index}
            id={transaction.id}
            usd={transaction.usd_amount}
            gbp={transaction.gbp_amount}
            //replaces trailing zeros with spaces on timestamp
            timestamp={transaction.timestamp.date.replace(/.0+$/, match => ' '.repeat(match.length))}
            isVerified={transaction.is_verified}
         />
      ));
   }, [selected]);

   return (
      <div>
         <h1>Transaction History</h1>
         <p>Please select your transaction type</p>
         <select onChange={handleSelectChange}>
            <option value="">Select Transaction Type</option>
            <option value="deposits">Deposits</option>
            <option value="withdrawals">Withdrawals</option>
         </select>
         <table>
            {(transactionList.length > 0) && 
               <tbody>
                  <tr>
                     <th>ID</th>
                     <th>Value ($)</th>
                     <th>Value (£)</th>
                     <th>Date</th>
                     <th>Verified?</th>
                  </tr>
               </tbody>
            }
            {(transactionList.length === 0 && selected !== '') ? <tbody><tr><td colSpan="5">No transactions to display</td></tr></tbody> : transactionList}
         </table>
      </div>
   );
}

export default TransactionHistory;
