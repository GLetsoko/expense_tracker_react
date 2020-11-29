import React, {useContext} from 'react';
import {ExpenseContext} from '../context/ExpenseContext';
const ExpenseIncome = () => {
    const {transactions} = useContext(ExpenseContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(transaction => transaction > 0)
    .reduce((acc, item) => (acc += item), 0).toFixed(2);

    const expense = (amounts.filter(transaction => transaction < 0)
    .reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (<>
        <div className="exp-inc">
            <div>
                <h2>+R{Math.abs(income)}</h2>
                <h3>Income</h3>
            </div>
            <div>
                <h2>-R{Math.abs(expense)}</h2>
                <h3>Expense</h3>
            </div>
        </div>
    </>)
}

export default ExpenseIncome
