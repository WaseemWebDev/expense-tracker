import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

export const globalContext = createContext();

const InitialState = {
    transactions: []
}
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, InitialState);

    function addTransaction(transactions) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transactions
        });
    }
    function deleteTransactions(id) {

        dispatch({
            type: "Delete_TRANSACTIONS",
            payload: id
        });
    }
    
    return (<globalContext.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransactions,

    }} >
        {children}
    </globalContext.Provider>);
}