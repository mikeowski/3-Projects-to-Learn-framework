import {
  createContext,
  Dispatch,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from 'react'
import { reducer, initialState } from './reducer'
import { Action, todo } from '../lib/types'

const TodoContext = createContext({} as [todo[], Dispatch<Action>])

export const TodoLayer = ({
  children,
  reducer,
  initialState,
}: PropsWithChildren<{
  reducer: Reducer<todo[], Action>
  initialState: todo[]
}>) => {
  return (
    <TodoContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoValue = () => useContext(TodoContext)
