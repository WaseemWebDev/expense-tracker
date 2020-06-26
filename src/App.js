import React from 'react';
import './App.css';
import Header from './components/header';
import Balance from './components/balance';
import TransactionHistory from './components/transactionHistory';
import Amount from './components/amount';
import { GlobalProvider } from './global-provider/globalState';
function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-md-9 p-4  shadow  bg-white jumbotron">
            <Header />
            <Balance />
            <br />
            <TransactionHistory />
            <br />
            <Amount />
          </div>

        </div>

      </div>
    </GlobalProvider>
  );
}

export default App;
