import { useState } from 'react'
import AddTodoForm from './components/addTodoForm'
import { todo } from './lib/types'

function App() {
  const [todos, setTodos] = useState<todo[]>([])
  return (
    <div className="mainContainer">
      <AddTodoForm setTodo={setTodos} Todos={todos} />
    </div>
  )
}

export default App
