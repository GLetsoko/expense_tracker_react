import React, {useContext} from 'react'
import { ExpenseContext } from "../context/ExpenseContext";
import Transaction from './Transaction';
const TransactionsList = () => {
    const {transactions} = useContext(ExpenseContext);
    return (
        <>  
        <div>
            <h4 style={{marginTop: "30px"}}>Transactions</h4>
        </div>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}

export default TransactionsList
