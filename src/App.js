import React from 'react';
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTrransaction } from "./components/AddTrransaction";

import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        {/* <IncomeExpense />
        <TransactionList />
        <AddTrransaction /> */}
      </div>
    </GlobalProvider>
  );
}

export default App;
