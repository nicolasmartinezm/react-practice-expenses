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
    date: new Date(2021, 5, 12) },
    { id: 'f2', 
    title: 'Bikes', 
    amount: 300, 
    date: new Date(2021, 0, 12) },
    { id: 'f2', 
    title: 'Bikes', 
    amount: 250, 
    date: new Date(2021, 6, 12) },
    { id: 'f2', 
    title: 'Bikes', 
    amount: 400, 
    date: new Date(2021, 7, 12) },
    { id: 'f5', 
    title: 'Skate', 
    amount: 320, 
    date: new Date(2021, 8, 12) },
    { id: 'f4', 
    title: 'Snowboard', 
    amount: 380, 
    date: new Date(2021, 9, 12) },
    { id: 'f4', 
    title: 'Car Insurance', 
    amount: 400, 
    date: new Date(2021, 10, 12) },
    { id: 'f4', 
    title: 'Traveling', 
    amount: 420, 
    date: new Date(2021, 11, 12) },
    { id: 'e10', 
    title: 'Online Courses', 
    amount: 500, 
    date: new Date(2021, 1, 20) },
    { id: 'e11', 
    title: 'Electricity bill', 
    amount: 90, 
    date: new Date(2021, 2, 30) },
  {
    id: 'e3',
    title: 'Gym',
    amount: 18,
    date: new Date(2021, 3, 28),
  },
  {
    id: 'e4',
    title: 'Supplements',
    amount: 100,
    date: new Date(2021, 4, 12),
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
