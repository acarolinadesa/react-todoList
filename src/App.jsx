import { Component, useState } from 'react'
import FormTodoList from './components/FormTodoList'
import TodoList  from './components/TodoList'
import styled from 'styled-components'

const StyledList = styled.div`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
`
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
      <StyledList>
        <div>
          <img width="50" height="50" src="./assets/react"/>
          {/* TODO: Fix image */}
            <div>React TodoList</div>
            {/* Injecao de depenencia */}
            <FormTodoList createTask= { this.createTask.bind(this) }/>
            <TodoList
              deleteTodo = {this.deleteTask.bind(this)}
              tasks={this.state.tasks}/>
        </div>
      </StyledList>
    )
  }
}

export default App
