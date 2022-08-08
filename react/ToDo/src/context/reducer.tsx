import { Reducer } from 'react'
import { Action, ActionType, todo } from '../lib/types'

export const initialState: todo[] = JSON.parse(
  localStorage.getItem('todoList') || '[]'
) as todo[]
const addLocalStorage = (todoList: todo[]) => {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}
export const reducer: Reducer<todo[], Action> = (todos, action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      const addedTodos = [...todos, action.payload]
      addLocalStorage(addedTodos)
      return addedTodos
    case ActionType.REMOVE_TODO:
      const removedTodos = todos.filter(
        (todo) => todo.title !== action.payload.title
      )
      addLocalStorage(removedTodos)
      return removedTodos
    case ActionType.TOGGLE_TODO:
      const toggledTodos = todos.map((todo) => {
        if (todo.title === action.payload.title) {
          return {
            title: todo.title,
            completed: !todo.completed,
          }
        }
        return todo
      })
      addLocalStorage(toggledTodos)
      return toggledTodos
    default:
      return todos
  }
}
