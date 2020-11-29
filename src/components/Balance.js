import React, {useContext} from 'react'
import { ExpenseContext } from '../context/ExpenseContext';

const Balance = () => {
    const {transactions} = useContext(ExpenseContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item)=> (acc += item), 0);
    const sign = total < 0 ? "-":"+"
    return (<>
    <div style={{display:'flex', flexDirection:"column"}}>
        <div className="balance">
            <h1>{sign}R{Math.abs(total)}</h1>
            <p>Your Total Balance</p>
        </div>
    </div>
    </>)
}

export default Balance
