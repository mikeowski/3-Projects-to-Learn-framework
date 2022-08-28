import { reactive } from 'vue'
import { Todo } from '../types'

const todoData = reactive<{ todos: Todo[] }>({
  todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
})

const methods = {
  addTodo(todo: Todo) {
    todoData.todos.push(todo)
    window.localStorage.setItem('todos', JSON.stringify(todoData.todos))
  },
  removeTodo(todo: Todo) {
    const index = todoData.todos.findIndex((v) => v.content == todo.content)
    todoData.todos.splice(index, 1)
    window.localStorage.setItem('todos', JSON.stringify(todoData.todos))
  },
  updateTodo(todo: Todo) {
    this.removeTodo(todo)
    this.addTodo({ content: todo.content, done: !todo.done })
    console.log(todoData.todos)
    window.localStorage.setItem('todos', JSON.stringify(todoData.todos))
  },
}
export const store = { todoData, methods }

export type storeType = typeof store
