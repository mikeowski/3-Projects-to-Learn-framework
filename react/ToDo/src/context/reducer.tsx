import { Reducer } from 'react'
import { Action, ActionType, todo } from '../lib/types'

export const initialState: todo[] = []

export const reducer: Reducer<todo[], Action> = (todos, action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [...todos, action.payload]
    case ActionType.REMOVE_TODO:
      return todos.filter((todo) => todo.title !== action.payload.title)
    case ActionType.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.title === action.payload.title) {
          return {
            title: todo.title,
            completed: !todo.completed,
          }
        }
        return todo
      })
    default:
      return todos
  }
}
