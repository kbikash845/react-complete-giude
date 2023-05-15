import logo from "./logo.svg";
import "./App.css";

import React from 'react'
import ExpenseItem from "./Componentss/ExpenseItem";


function App() {
  const expense=[
    {
      id:"e1",
      title:"Toilet Paper",
      amount:246.4,
      date: new Date(2021,2,28)
    },
    {
      id:"e2",
      title:"New TV",
      amount:453.4,
      date: new Date(2022,4,23)
    },
    {
      id:"e3",
      title:"Car Insurance",
      amount:234.7,
      date: new Date(2020,5,8)
    },
    {
      id:"e4",
      title:"New Desk",
      amount:253.4,
      date: new Date(2021,2,28)
    }
  ]
  return (
    <div>
    {expense.map(value=>(
      <ExpenseItem
      key={value.id}
      date={value.date}
      title={value.title}
      amount={value.amount}
      />
    ))}
    </div>
  )
}

export default App
