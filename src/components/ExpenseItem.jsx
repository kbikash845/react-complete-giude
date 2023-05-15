import React from 'react'
import "./ExpenceItem.css"

function ExpenseItem(props) {
  // const expenseitems= new Date(2021, 2, 28)
  // const expensetitle="Car Insurance";
  // const expenseAmount=294.24
  return (
    <div className='expense-item'>
    <div>
    <div>{props.date.toISOString()}</div>
     </div>
    <div className='expense-item-description'>
    <h2>{props.title}</h2>
    <h2>{props.location}</h2>
    <div className='expense-item-price'>{props.amount}</div>
    </div>
    </div>
  )
}

export default ExpenseItem
