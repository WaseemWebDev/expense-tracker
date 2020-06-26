import React, { useState, useContext, useEffect, useRef } from 'react';
import { globalContext } from '../global-provider/globalState';


function Amount() {
    const inputRef = useRef();

    const [transaction, setTransaction] = useState("");
    const [amount, setAmount] = useState("");
    const { addTransaction, currentTodo, updateTodo } = useContext(globalContext);
    useEffect(() => {
        if (currentTodo != null) {
            setTransaction(currentTodo.text);
            setAmount(currentTodo.amount)
            inputRef.current.focus();

        }
    }, [currentTodo]);

    const onSubmit = e => {
        e.preventDefault();
        if (currentTodo != null) {
            const updated_todo = {
                id: currentTodo.id,
                text: transaction,
                amount: amount * 1

            };
            updateTodo(updated_todo);
            setAmount("");
            setTransaction("");
        }
        else {
            if (amount === "" || transaction === "") {
                alert("fields can not be empty")
            }
            else {
                const newTransaction = {
                    id: Math.floor(Math.random() * 100000000),
                    text: transaction,
                    amount: amount * 1
                    // amount:Number(amount) //you can do +amount
                }
                addTransaction(newTransaction);
                setAmount("");
                setTransaction("");
            }
        }
    }
    return (
        <div className="row justify-content-center">
            <div class="col-lg-7">
                <form onSubmit={onSubmit}>

                    <label>Transaction Name</label>
                    <input type="text" id="transaction-name" ref={inputRef} onChange={(e) => setTransaction(e.target.value)} value={transaction} className="form-control" />
                    <br />
                    <label>Amount</label>
                    <input type="number" id="transaction-amount" onChange={(e) => setAmount(e.target.value)} value={amount} className="form-control" />
                    <br />
                    <button className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>

        </div>
    );
}

export default Amount;