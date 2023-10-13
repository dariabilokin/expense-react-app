import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { db } from "./firebase.js";
import { collection, onSnapshot, addDoc, Timestamp } from "firebase/firestore";
import { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "expenses"), (snapshot) => {
      setExpenses(
        snapshot.docs.map((doc) => {
          return {
            id: doc.data().id,
            title: doc.data().title,
            amount: doc.data().amount,
            date: doc.data().date.toDate(),
          };
        })
      );
    });
  }, [expenses]);
  const addExpenseHandler = (expense) => {
    addDoc(collection(db, "expenses"), {
      ...expense,
      date: Timestamp.fromDate(expense.date),
    });
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
