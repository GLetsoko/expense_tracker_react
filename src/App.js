import './App.css';
import ExpensesProvider from './context/ExpenseContext';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import TransactionsList from './components/TransactionsList';
import Header from './components/Header';
import ExpenseIncome from './components/ExpenseIncome';

function App() {
  return <ExpensesProvider>
    <div  className="header">
      <Header />
    </div>
    <div className="container">
      <h4>Balance &amp; Spending</h4>
      <div className="spending">
        <Balance />
        <ExpenseIncome />
      </div>
      <TransactionsList />
      <AddTransaction />
    </div>
    </ExpensesProvider>;
}

export default App;
