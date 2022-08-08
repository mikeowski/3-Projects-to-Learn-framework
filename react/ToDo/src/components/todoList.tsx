import { Dispatch, SetStateAction } from 'react'
import { todo, ActionType } from '../lib/types'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useTodoValue } from '../context/todoContextLayer'

const TodoList = () => {
  const [todos, action] = useTodoValue()
  const [parent] = useAutoAnimate<HTMLUListElement>()
  const remove = (todo: todo) => {
    action({ type: ActionType.REMOVE_TODO, payload: todo })
  }
  return (
    <div className="todoList">
      <h1 className="center">Your ToDos</h1>
      <ul ref={parent}>
        {todos
          .filter((todo) => todo.completed)
          .map((v, i) => (
            <div className="todo" key={v.title}>
              <span onClick={() => remove(v)} className="outline deleteBtn">
                ❌
              </span>
              <span className={v.completed ? 'checked' : ''} key={i}>
                {v.title}
              </span>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  action({ type: ActionType.TOGGLE_TODO, payload: v })
                }}
              />
            </div>
          ))}
      </ul>
      <ul ref={parent}>
        {todos
          .filter((v) => !v.completed)
          .map((v, i) => (
            <div className="todo" key={v.title}>
              <span onClick={() => remove(v)} className="outline deleteBtn">
                ❌
              </span>
              <span className={v.completed ? 'checked' : ''} key={i}>
                {v.title}
              </span>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  action({ type: ActionType.TOGGLE_TODO, payload: v })
                }}
              />
            </div>
          ))}
      </ul>
    </div>
  )
}
export default TodoList
