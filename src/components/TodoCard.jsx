import React, { Component } from "react";
import deleteSVG from "../assets/img/delete.svg"
class TodoCard extends Component {

  delete() {
    const indice = this.props.indice
    this.props.deleteTodo(indice)
  }
  render() {
    return (
      <div className="flex">
        <img
          src={deleteSVG}
          onClick={this.delete.bind(this)}/>
        <h1>{ this.props.todo }</h1>
      </div>
    )
  }
}
export default TodoCard