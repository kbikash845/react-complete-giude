import logo from "./logo.svg";
import "./App.css";



import ExpenseItem from "./components/ExpenseItem";
// import { useState } from "react";

function App() {

  const expense=[
    {
      id:'e1',
      title:'Toilet Paper',
      amount:94.42,
      date:new Date(2020,7,14),
      location:'Chandigarh'

    },
    {
      id:'e2',
      title:'Car Insurances',
       amount:'250.48',
       date:new Date(2021,5,15),
       location:'Bihar'
    },
    {
      id:'e3',
      title:'News TV ',
       amount:'250.48',
       date:new Date(2023,5,15),
       location:"Mumbai"
    },
    {
      id:'e4',
      title:'New Desk',
       amount:'250.48',
       date:new Date(2022,5,15),
       location:'Delhi'
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
        location={value.location}
      />
    ))}
  </div>
    </div>
  );
}

export default App;
