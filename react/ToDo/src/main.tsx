import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.css'
import { reducer, initialState } from './context/reducer'
import { TodoLayer } from './context/todoContextLayer'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoLayer reducer={reducer} initialState={initialState}>
      <App />
    </TodoLayer>
  </React.StrictMode>
)
