import React from "react"

class TodoCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleSaveEditClick = this.handleSaveEditClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {isEditing: false}
  }

  handleDeleteClick() {
    const indice = this.props.indice
    this.props.deleteTodo(indice)
  }

  handleEditClick() {
    this.setState({isEditing: true})
  }

  handleSaveEditClick(event) {
    this.setState({isEditing: false})
  }

  handleChange (event) {
    const indice = this.props.indice
    this.props.editTodo(event.target.value, indice)
  }

  render() {
    const isEditing = this.state.isEditing
    let button, text
    if(isEditing) {
      button = <button onClick={this.handleSaveEditClick}>Ok</button>
      text = <input value={this.props.todo} onChange={this.handleChange}/>
    } else {
      button = <button onClick={this.handleEditClick}>Editar</button>
      text = <span>{ this.props.todo }</span>
    }

    return (
      <div>
        { text }
        <button onClick={this.handleDeleteClick}>X</button>
        { button }
      </div>
    )
  }
}
export default TodoCard