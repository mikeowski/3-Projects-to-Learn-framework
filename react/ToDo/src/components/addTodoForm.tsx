import { SetStateAction, useState } from 'react'
import type { Dispatch } from 'react'
import { todo } from '../lib/types'
interface props {
  setTodo: Dispatch<SetStateAction<todo[]>>
  Todos: todo[]
}
const AddTodoForm = ({ setTodo, Todos }: props) => {
  const addTodo = () => {
    if (Todos.find((v) => v.title === title)) {
      alert('This todo is already exist')
      return
    }
    if (title === '') {
      alert('Please enter a todo')
      return
    }
    setTodo((prev) => [...prev, { title, completed: false }])
    setTitle('')
  }
  const [title, setTitle] = useState('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addTodo()
      }}
      className="todoForm"
    >
      <label htmlFor="todo">
        <h1 className="center">Add new</h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="newTodo"
          placeholder="Check pull requests"
        />
      </label>
      <button type="submit" className="outline">
        Add
      </button>
    </form>
  )
}

export default AddTodoForm
