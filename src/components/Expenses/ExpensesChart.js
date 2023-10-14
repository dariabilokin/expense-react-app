import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = {
    Fixed: 0,
    Groceries: 0,
    "Eating out": 0,
    Education: 0,
  };

  for (const expense of props.expenses) {
    const expenseMonth = expense.category; //starting at 0 : Jan == 0
    chartDataPoints[expenseMonth] += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
