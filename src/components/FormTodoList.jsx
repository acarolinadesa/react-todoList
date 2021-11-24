import React, { Component } from "react";

class FormTodoList extends Component {
  // propriedade de App.jsx é recebida por parametro como uma props
  constructor(props) {
    //declaracao de propriedades e atributos desta classe
    super(props) //classe extende de Component
    this.todo = ""
  }
  handlerChangeTodo(event) {
    // event e o parametro passado por referência
    this.todo = event.target.value
    event.stopPropagation()
    console.log(this.todo)
  }
  createTask(event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.createTask(this.todo)
    console.log(`${this.todo}`)
  }
  render() {
    return (
      <div>
        <form
          onSubmit= { this.createTask.bind(this) }>
          <div>
            <input
              type="text"
              placeholder="title"
              onChange={ this.handlerChangeTodo.bind(this) }/>
          </div>
          <div>
            <button
              > Criar nota</button>
          </div>
        </form>
      </div>
    )
  }
}
export default FormTodoList