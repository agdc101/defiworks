import React, { useState, useMemo } from 'react';
import TransactionItem from './components/TransactionItem';

function TransactionHistory({ deposits, withdrawals }) {
   const [selected, setSelected] = useState('');

   function handleSelectChange(event) {
      setSelected(event.target.value);
   }

   const transactionList = useMemo(() => {
      const transactions = selected === 'withdrawals' ? withdrawals : deposits;

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
         <a href="/dashboard">Back to Dashboard</a>
         <select onChange={handleSelectChange}>
            <option value="">Select Transaction Type</option>
            <option value="deposits">Deposits</option>
            <option value="withdrawals">Withdrawals</option>
         </select>
         <table>
         <thead>
         {(transactionList.length > 0) && 
            <tr>
               <th>Transaction ID</th>
               <th>USD Amount</th>
               <th>GBP Amount</th>
               <th>Timestamp</th>
               <th>Verified</th>
            </tr>
         }
         </thead>
            {(transactionList.length === 0) ? <tr><td colSpan="5">No transactions to display</td></tr> : transactionList}
         </table>
      </div>
   );
}

export default TransactionHistory;
