import React, {useState, useContext} from 'react'
import { ExpenseContext } from '../context/ExpenseContext';
import {v4 as uuid } from 'uuid';

const AddTransaction = () => {
    const {addTransaction} = useContext(ExpenseContext);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = e =>{
        e.preventDefault();
        if(description){
            const newTransaction = {
                id: uuid(), 
                amount: +amount, 
                description
            };
            addTransaction(newTransaction);
            setDescription('');
            setAmount(0);
        }
    }

    return (<>
        <div>
            <h4>Add Transaction</h4>
        </div>
        <div className='form'>
        <p>Enter Expense / Income name</p>
          <form onSubmit={handleSubmit}>
              <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
              <label htmlFor="amount">Expense(negative) / Income(positive)</label>
              <input type="number" value={amount}name="amount" onChange={(e)=>setAmount(e.target.value)}/>
              <div className="btn-add">
                <button type="submit">Add Transaction</button>
              </div>
            </form>  
        </div>
    </>)
}

export default AddTransaction
