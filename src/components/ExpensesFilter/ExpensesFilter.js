import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const expensesFilterHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by month</label>
        <select value={props.selected} onChange={expensesFilterHandler}>
          {props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
