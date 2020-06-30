import React, { useContext } from 'react';
import ListItems from './ListItems';
import { globalContext } from '../global-provider/globalState';


export function TransactionHistory() {

    const { transactions } = useContext(globalContext)
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <h3>Transaction History</h3>
                    {!transactions.length  ? <h5 style={{color:"red"}}>No Record yet</h5> :  <h5 style={{color:"green"}}>{transactions.length} Records Found</h5> }
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