import React, { Component } from 'react'
import TodoCard from './TodoCard'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="w-full ">
            {/* Código Javascript */}
            {/* { Array.of('1', '2', '3', '4', '6').map((item, index) => { */}
            {this.props.tasks.map((x, index) => {
              return (
                <div className="pt-4">
                  <div className="rounded-lg bg-gray-100 p-5 flex" key = {index}>
                    {/* <div>{item}</div> */}
                    <TodoCard
                      indice = {index}
                      deleteTodo = {this.props.deleteTodo}
                      todo={x.todo}/>
                  </div>
                </div>
              )
            })}
      </div>
    )
  }
}
export default TodoList
