import React from 'react'
import "./ExpenseItem.css"

function ExpenseItem() {
  return (
    <div className='expense-item'>
    <div>March 28th 2021</div>
    <div className='expense-item_description'>
    <h2>Car Insurance</h2>
    <h2>Delhi</h2>
    <div className='expense-item_price'>$297.24</div>
    </div>
    </div>
  )
}

export default ExpenseItem
