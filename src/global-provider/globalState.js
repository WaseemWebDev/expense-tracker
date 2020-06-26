import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

export const globalContext = createContext();

const InitialState = {
    transactions: [],
    currentTodo: null,
}
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, InitialState);

    function addTransaction(transactions) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transactions
        });
    }
    const updateTodo = (todo) => {

        dispatch({
            type: "UPDATE_TODO",
            payload: todo,
        });
    };
    function deleteTransactions(id) {

        dispatch({
            type: "Delete_TRANSACTIONS",
            payload: id
        });
    }
    const setTodo = (todo) => {
       
        dispatch({
            type: "SET_TODO",
            payload: todo,
        });
    };
    return (<globalContext.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransactions,
        setTodo,
        updateTodo,
        currentTodo: state.currentTodo,

    }} >
        {children}
    </globalContext.Provider>);
}