import { Dispatch, SetStateAction } from 'react'
import { todo } from '../lib/types'

interface props {
  todoList: todo[]
}
const TodoList = ({ todoList }: props) => {
  return (
    <div className="todoList">
      <h1 className="center">Your ToDos</h1>
      {todoList.map((v, i) => (
        <ul className="div2" key={v.title}>
          <div className="todo">
            <span className="title" key={i}>
              {v.title}
            </span>
            <input
              type="checkbox"
              onChange={(e) => {
                v.completed = e.target.checked
                console.log(e)
              }}
            />
          </div>
        </ul>
      ))}
    </div>
  )
}
export default TodoList
