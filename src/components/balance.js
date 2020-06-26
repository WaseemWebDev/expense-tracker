import React, { useContext } from 'react';
import { globalContext } from '../global-provider/globalState';

function Balance() {
    const { transactions } = useContext(globalContext);

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)    //both methods are working fine but map syntax is lil bit easy
                income += transactions[i].amount
        }
        return income;

    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount  
        }
       
        return expense;
    }
    return (

        <div className="row justify-content-center">

            <span className="mr-4" >Total Balance:<h4>{getIncome() + getExpense()}$</h4> </span>

            <span className="ml-3" style={{ color: "green" }}> Income:<h4>{getIncome()}$</h4> </span>

            <span className="ml-4" style={{ color: "red" }}>Expense:<h4>{getExpense()}$</h4> </span>

        </div>


    );
}
export default Balance;