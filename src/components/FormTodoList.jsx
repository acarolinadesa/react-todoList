import React, { Component } from "react";

class FormTodoList extends Component {
  // propriedade de App.jsx é recebida por parametro como uma props
  constructor(props) {
    //declaracao de propriedades e atributos desta classe
    super(props) //classe extende de Component
    this.state = {todo: ''}
  }
  handlerChangeTodo(event) {
    this.setState({todo: event.target.value})
  }
  createTask2(event) {

    if(this.state.todo.trim()) {
      this.props.createTask(this.state.todo)
    }
    event.preventDefault()
  }
  render() {
    return (
      <div>
        <form onSubmit={ this.createTask2.bind(this) }>
            <input
              type="text"
              onChange={ this.handlerChangeTodo.bind(this) } />
            <button>Cadastrar</button>
        </form>
      </div>
    )
  }
}
export default FormTodoList