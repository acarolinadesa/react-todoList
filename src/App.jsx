import { Component, useState } from 'react'
import FormTodoList from './components/FormTodoList'
import TodoList  from './components/TodoList'

class App extends Component {
  constructor() {
    super()
    // atributos basicos do react: props e state
    this.state = {
      tasks: []
    } //objeto para adicionar com mais facilidade
  }
  createTask(todo) {
    const newTask = {todo}
    const newArrayTasks = [...this.state.tasks, newTask]
    const newState = {
      tasks: newArrayTasks
    }
    // this.tasks.push(newTask) // push de novaTask no array de tasks[]
    this.setState(newState)
  }

  deleteTask(index) {
    let arrayTasks = this.state.tasks
    arrayTasks.splice(index, 1)
    this.setState({tasks: arrayTasks})
  }
  render() {
    return (
      // className - classe do CSS
      <div className="p-40">
        <h1 className="uppercase font-bold text-center text-2xl">REACT TODOLIST</h1>
        {/* Injecao de depenencia */}
        <FormTodoList createTask= { this.createTask.bind(this) }/>
        <TodoList
          deleteTodo = {this.deleteTask.bind(this)}
          tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App
