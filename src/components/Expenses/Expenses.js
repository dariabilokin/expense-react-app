import React, { useState } from 'react';
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.data.filter(
        expenseItem => {
            return expenseItem.date.getFullYear().toString() === filteredYear;
            //expenseItem.date.toString().includes(filteredYear)
        });
    


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList data={filteredExpenses}/>
            </Card>
        </div>

    );

};
export default Expenses;