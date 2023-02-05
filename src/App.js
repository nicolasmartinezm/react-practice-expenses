import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Grocery Shopping',
    amount: 115.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'Rent', 
    amount: 260, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Gym',
    amount: 18,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Supplements',
    amount: 100,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler = ( expense ) => {
  setExpenses(prevExpenses=>{
    return [expense, ...prevExpenses];
  });
}

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses item={expenses} />
      
    </div>
  );
}

export default App;
