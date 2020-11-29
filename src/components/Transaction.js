import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext';

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(ExpenseContext);
    const {amount, description,id} = transaction;
    const sign = amount < 0 ? "-" : "";
    return (
            <li className={amount < 0? "item-list-box minus":"item-list-box plus"}>
                <span id="desc">{description}</span>
                <div className="amount">
                    <span>{sign}R{Math.abs(amount)}</span>
                </div>
                <div className="btn">
                    <button onClick={()=>deleteTransaction(id)}>X</button>
                </div>
            </li>
    )
}

export default Transaction
