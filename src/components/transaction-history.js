import React, { useContext } from 'react';
import ListItems from './Lists-items';
import { globalContext } from '../global-provider/global-state';


export function TransactionHistory() {

    const { transactions } = useContext(globalContext)
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h3>Transaction History</h3>
                    <br />
                    <ul className="list-group">
                        {transactions.map((transactions, index) => {
                            return <ListItems key={index} transactions={transactions} />

                        })}
                    </ul>
                </div>
            </div>

        </>
    );

}
export default TransactionHistory;