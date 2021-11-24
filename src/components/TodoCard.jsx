import React, { Component } from "react";

class TodoCard extends Component {

  delete() {
    const indice = this.props.indice
    this.props.deleteTodo(indice)
  }
  render() {
    return (
      <div>
        <div>{ this.props.todo }</div>
        <button onClick={this.delete.bind(this)}>X</button>
        <button>Editar</button>
      </div>
    )
  }
}
export default TodoCard