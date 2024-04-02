import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {
  
  const [todos, setTodos] = useState([])
  const [freshTodo, setFreshTodo] = useState('')


  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: 
    newList}))
  }
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)

  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
    persistData(newTodoList)

    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setFreshTodo(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return 
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} freshTodo={freshTodo} setFreshTodo={setFreshTodo}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
