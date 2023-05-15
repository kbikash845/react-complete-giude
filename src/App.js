import logo from "./logo.svg";
import "./App.css";



import ExpenseItem from "./components/ExpenseItem";
// import { useState } from "react";

function App() {

  const expense=[
    {
      id:'el',
      title:'Toilet Paper',
      amount:94.42,
      date:new Date(2020,7,14),
    },
    {
      id:'e2',
      title:'Car Insurances',
       amount:'250.48',
       date:new Date(2021,5,15)
    },
    {
      id:'e3',
      title:'News TV ',
       amount:'250.48',
       date:new Date(2023,5,15)
    },
    {
      id:'e4',
      title:'New Desk',
       amount:'250.48',
       date:new Date(2022,5,15)
    },

  ]
   return (
    <div>
    <h1>Lets Get Started</h1>
    <div>
    {expense.map(value => (
      <ExpenseItem 
        key={value.id} 
        date={value.date} 
        title={value.title} 
        amount={value.amount} 
      />
    ))}
  </div>
    </div>
  );
}

export default App;
