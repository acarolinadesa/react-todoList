import React, { Component } from "react";

class TodoCard extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.todo }</h1>
      </div>
    )
  }
}
export default TodoCard