import React, { Component } from 'react'
import TodoCard from './TodoCard'


class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.tasks.map((x, index) => {
          return (
            <div key = {index}>
                {/* <div>{item}</div> */}
                <TodoCard
                  indice = {index}
                  deleteTodo = {this.props.deleteTodo}
                  todo={x.todo}/>
            </div>
          )
        })}
      </div>
    )
  }
}
export default TodoList
