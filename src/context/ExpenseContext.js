import React, {createContext, useReducer} from 'react';
import {Reducer} from './Reducer';

const initialState = {
    transactions: []
};

export const ExpenseContext = createContext(initialState);

const ExpensesProvider = (props) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    //Functions
    const addTransaction = transaction =>{
        dispatch({type:'ADD_TRANSACTION', payload: transaction});
    }
    
    const deleteTransaction = id => {
        dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }
    return <ExpenseContext.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
    }}>
        {props.children}
    </ExpenseContext.Provider>
}

export default ExpensesProvider;