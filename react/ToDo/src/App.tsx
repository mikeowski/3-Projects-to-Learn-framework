import { useState } from 'react'

function App() {
  return (
    <div className="mainContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <label htmlFor="todo">
          <h1 className="center">Add new</h1>
          <input type="text" id="newTodo" placeholder="Check pull requests" />
        </label>
        <button type="submit" className="outline">
          Add
        </button>
      </form>
    </div>
  )
}

export default App
