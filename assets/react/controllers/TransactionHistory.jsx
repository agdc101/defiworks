import React, { useState, useEffect, useMemo } from 'react';
import TransactionItem from './components/TransactionItem';

function TransactionHistory({ deposits, withdrawals }) {
   const [selected, setSelected] = useState('withdrawals');

   function handleSelectChange(event) {
      setSelected(event.target.value);
   }

   //remove time from timestamp
   // const date = new Date(deposits[0].timestamp.date);

   const transactionList = useMemo(() => {
      const transactions = selected === 'withdrawals' ? withdrawals : deposits;

      return transactions.map((transaction, index) => (
         <TransactionItem
            key={index}
            id={transaction.id}
            usd={transaction.usd_amount}
            gbp={transaction.gbp_amount}
            timestamp={transaction.timestamp.date}
            isVerified={transaction.is_verified}
         />
      ));
   }, [selected, deposits, withdrawals]);

   return (
      <div>
         <h1>Transaction History</h1>
         <select onChange={handleSelectChange}>
            <option value="withdrawals">Withdrawals</option>
            <option value="deposits">Deposits</option>
         </select>
         {transactionList}
      </div>
   );
}

export default TransactionHistory;
