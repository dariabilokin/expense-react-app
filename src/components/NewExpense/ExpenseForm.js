import React from "react";
import "./ExpenseForm.scss";
import { useForm } from "react-hook-form";

const ExpenseForm = (props) => {
  const { register, handleSubmit, reset, errors } = useForm();

  const submitHandler = (data) => {
    const expenseData = {
      title: data.title,
      category: data.category,
      amount: +data.amount,
      date: new Date(data.date),
    };
    props.onSaveExpenseData(expenseData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="expense-form__container">
        <fieldset>
          <label htmlFor="title">Title</label>
          <input {...register("title", { required: true })} />
        </fieldset>
        <fieldset>
          <label htmlFor="category">Category</label>
          <select {...register("category", { required: true })}>
            <option value=""></option>
            <option value="Fixed">Fixed</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Eating out">Eating out</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Rent">Rent</option>
            <option value="Insurance">Insurance</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            {...register("amount", { valueAsNumber: true, required: true })}
          ></input>
        </fieldset>
        <fieldset>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={new Date().toISOString().split("T")[0]}
            {...register("date", { required: true })}
          ></input>
        </fieldset>
      </div>
      <div className="new-expense__buttons">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
