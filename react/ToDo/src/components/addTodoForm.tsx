import { SetStateAction, useState } from 'react'
import type { Dispatch } from 'react'
import { todo, ActionType } from '../lib/types'
import { useTodoValue } from '../context/todoContextLayer'

const AddTodoForm = () => {
  const [todos, action] = useTodoValue()
  const [title, setTitle] = useState('')
  const addTodo = () => {
    if (todos.find((v) => v.title === title)) {
      alert('This todo is already exist')
      return
    }
    if (title === '') {
      alert('Please enter a todo')
      return
    }
    action({ type: ActionType.ADD_TODO, payload: { title, completed: false } })
  }

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
