import React, { useState, useMemo } from 'react';
import TransactionItem from './components/TransactionItem';

function TransactionHistory({ deposits, withdrawals }) {
   const [selected, setSelected] = useState('withdrawals');

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
   }, [selected, deposits, withdrawals]);

   return (
      <div>
         <h1>Transaction History</h1>
         <p>Please select your transaction type</p>
         <select onChange={handleSelectChange}>
            <option value="withdrawals">Withdrawals</option>
            <option value="deposits">Deposits</option>
         </select>
         <table>
         <thead>
         {(transactionList.length > 0) && 
            <tr>
               <th>ID</th>
               <th>Value ($)</th>
               <th>Value (£)</th>
               <th>Date</th>
               <th>Verified?</th>
            </tr>
         }
         </thead>
            {(transactionList.length === 0) ? <tr><td colSpan="5">No transactions to display</td></tr> : transactionList}
         </table>
      </div>
   );
}

export default TransactionHistory;
