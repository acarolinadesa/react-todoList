import React, { Component } from 'react'
import TodoCard from './TodoCard'


class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  editValue (newValue, index) {
    this.props.editValue(newValue, index)
  }
  render() {
    return (
      <div>
        {this.props.tasks.map((x, index) => {
          return (
            <div key = {index}>
                {/* <div>{item}</div> */}
                <TodoCard
                  editValue= { this.editValue.bind(this) }
                  indice = {index}
                  deleteTodo = {this.props.deleteTodo}
                  editTodo = {this.props.editTodo}
                  todo={x.todo}/>
            </div>
          )
        })}
      </div>
    )
  }
}
export default TodoList
