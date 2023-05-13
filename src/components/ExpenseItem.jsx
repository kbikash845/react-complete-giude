import React from 'react'

function ExpenseItem(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Food Rs 10</h2>
      <h2>Petrol Rs 100</h2>
      <h2>Movies Rs 200</h2>

    </div>
  )
}

export default ExpenseItem
