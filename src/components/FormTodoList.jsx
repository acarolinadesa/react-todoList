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
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit= { this.createTask.bind(this) }>
          <div className="mb-04 pt-4">
            <textarea
              rows="3"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="title"
              onChange={ this.handlerChangeTodo.bind(this) }/>
          </div>
          {/* <div className="mb-04 pt-4">
            <textarea
              rows="10"
              className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="content"
              onChange={ this.handlerChangeTodo.bind(this) }/>
          </div> */}
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              > Criar nota</button>
          </div>
        </form>
      </div>
    )
  }
}
export default FormTodoList