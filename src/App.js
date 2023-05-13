import logo from "./logo.svg";
import "./App.css";



import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";

function App() {

   return (
    <div>
      <ExpenseItem title="Expanse Tracker Item"/>
    </div>
  );
}

export default App;
