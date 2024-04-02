import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, handleEditTodo, index} = props
  return (
    <div>
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick={() => handleEditTodo(index)}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button>
                    <i className="fa-solid fa-trash" onClick={() => handleDeleteTodo(index)}></i>
                </button>
            </div>
        </li>
    </div>
  )
}
