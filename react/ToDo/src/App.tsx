import { useState } from 'react'
import AddTodoForm from './components/addTodoForm'
import TodoList from './components/todoList'
import { todo } from './lib/types'

function App() {
  const [todoList, setTodoList] = useState<todo[]>([])
  return (
    <div className="container-fluid grid mainContainer">
      <div>
        {' '}
        <TodoList todoList={todoList} />
      </div>
      <div>
        {' '}
        <AddTodoForm setTodo={setTodoList} Todos={todoList} />
      </div>
    </div>
  )
}

export default App
