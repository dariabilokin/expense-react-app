import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Expenses(props) {
  const [filteredMonth, setFilteredMonth] = useState(
    months[new Date().getMonth()]
  );

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };
  const filteredExpenses = props.data.filter((expenseItem) => {
    return months[expenseItem.date.getMonth()] === filteredMonth;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredMonth}
          options={[
            ...new Set(
              props.data.map((expense) => months[expense.date.getMonth()])
            ),
          ]}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList data={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
