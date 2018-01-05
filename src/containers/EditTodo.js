import React from 'react'
import { connect } from 'react-redux'
import { editThisTodo } from '../actions'
import { Component} from 'react'

class EditTodo extends Component{
  
  render(){
    let input;
    console.log(this.props)

  let todotext = this.props.todo[0]? console.log(this.props.todo[0].text) : "";
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.dispatch(editThisTodo(this.props.todo[0].id, input.value))
          input.value = ''
        }}
      >
        <input type="text"
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Save Todo
        </button>
      </form>
    </div>
  )
}}
const mapStateToProps = state => {
  console.log(state)
  return {
    editing_id: state.editingDetails.editing_id,
    todo: state.todos.filter(todo => todo.id === state.editingDetails.editing_id)
  }
}

EditTodo = connect(mapStateToProps)(EditTodo)

export default EditTodo