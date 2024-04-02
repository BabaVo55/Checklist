import React, {useState} from 'react'

export default function TodoInput(props) {
    const {handleAddTodos, freshTodo, setFreshTodo} = props
    
  return (
    <header>
        <input value={freshTodo} onChange={(e) => {
            setFreshTodo(e.target.value)
        }} placeholder='Add Todos...'/>
        <button onClick={() => {
            handleAddTodos(freshTodo) 
            setFreshTodo('')}} >Add</button>
    </header>
  )
}
