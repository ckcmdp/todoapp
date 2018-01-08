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
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(event){
    let val = event.target.value;
    this.setState({
      input_value: val
    })
  }
  
  render(){

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!e.target[0].value.trim()) {
            return
          }
          this.props.dispatch(editThisTodo(this.props.todo.id, e.target[0].value))
          e.target[0].value = ''
        }}
      >
        <input type="text" ref="input"
           value={this.state.input_value} onChange={this.changeInput}
        />
        <button type="submit">
          Save Todo
        </button>
      </form>
    </div>
  )
}}

const mapStateToProps = state => {
  return {
    editing_id: state.editingDetails.editing_id,
    todo: state.todos.filter(todo => todo.id === state.editingDetails.editing_id)[0]
  }
}

EditTodo = connect(mapStateToProps)(EditTodo)

export default EditTodo