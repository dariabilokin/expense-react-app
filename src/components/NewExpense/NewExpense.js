import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
    const [updatedFormState, setFormState] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormState(false);
    };

    const addFormStateHandler = () => {
        setFormState(true);
    };

    const stopAddFormStateHandler = () => {
        setFormState(false);
    };

    return <div className="new-expense">
        {!updatedFormState && <button onClick={addFormStateHandler}>Add New Expense</button>}
        {updatedFormState && <ExpenseForm onCancel={stopAddFormStateHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        
    </div>
};

export default NewExpense;