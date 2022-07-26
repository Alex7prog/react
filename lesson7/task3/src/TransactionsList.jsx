import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
  let transactionList = transactions.slice();

  return (
    <ul className="transactions">
      {transactionList.map(transaction => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </ul>
  );
};

export default TransactionsList;
