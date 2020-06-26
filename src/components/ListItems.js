import React, { useContext } from 'react'
import { globalContext } from '../global-provider/globalState'


function ListItems({ transactions }) {
    const { deleteTransactions } = useContext(globalContext);
    const sign = transactions.amount > 0 ? "+" : ""
    return (
        <>
            <li style={{ padding: "10px" }} className="list-group-item ">
                <span className={`${transactions.amount > 0 ? "income" : "expense"}`}>{transactions.amount > 0 ? "income" : "expense"}</span>
                <span className="transaction-list">{transactions.text}</span>
                <span className="transaction-list" style={{ color: transactions.amount > 0 ? "green" : "red" }}>{sign}{transactions.amount}</span>
                <span className="deletebtn"><button className="btn btn-danger btn-sm" onClick={() => deleteTransactions(transactions.id)}>delete</button></span>

            </li>
        </>
    );
}
export default ListItems;
