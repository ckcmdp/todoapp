import React from 'react'
import { connect } from 'react-redux'
import { editThisTodo } from '../actions'
import { Component } from 'react'

class EditTodo extends Component{
  constructor(props){
    super();
    this.state={
      input_value: props.todo.text
    }
  }

  changeInput = (event) => {
    let val = event.target.value;
    this.setState({
      input_value: val
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.input_value.trim()) {
     return
    }
    this.props.dispatch(editThisTodo(this.props.todo.id, this.state.input_value))
    this.setState({
      input_value: ''
    })
  }
  
  render(){

  return (
    <div>
      <form
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <input type="text" value={this.state.input_value} onChange={(event) => this.changeInput(event)} />
        <button type="submit">
          Save Todo
        </button>
      </form>
    </div>
  )}
}

const mapStateToProps = state => {
  return {
    editing_id: state.editingDetails.editing_id,
    todo: state.todos.find(todo => todo.id === state.editingDetails.editing_id)
  }
}

EditTodo = connect(mapStateToProps)(EditTodo)

export default EditTodo