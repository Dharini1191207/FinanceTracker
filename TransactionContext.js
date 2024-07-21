import React, { createContext, useState } from 'react';

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: '1', name: 'Freshco', amount: '$82.00', date: '2024-07-01' },
    { id: '2', name: 'Preso Tea', amount: '$12.00', date: '2024-07-02' },
    { id: '3', name: 'Urban Planet', amount: '$50.47', date: '2024-07-03' },
    { id: '4', name: 'Walmart', amount: '$20.97', date: '2024-07-05' },
    { id: '5', name: 'Apple', amount: '$550.00', date: '2024-07-06' },
    { id: '6', name: 'Winners', amount: '$20.70', date: '2024-07-09' },
    { id: '7', name: 'Cineplex', amount: '$34.00', date: '2024-07-11' },
    { id: '8', name: 'Microsoft', amount: '$55.00', date: '2024-07-16' },
    { id: '9', name: 'Amazon', amount: '$27.00', date: '2024-07-19' },
    { id: '10', name: 'Restaurant', amount: '$74.00', date: '2024-07-21' },
  ]);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
