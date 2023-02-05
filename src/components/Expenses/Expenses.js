import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpansesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const settingValueHandler = (value) => {
        setFilteredYear(value);
            console.log(filteredYear)
    }
    const filteredExpenses = props.item.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })

    
    return(
        <div>
            
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onSettingValue = {settingValueHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
               
            </Card>
        </div>
    )
}
export default Expenses;