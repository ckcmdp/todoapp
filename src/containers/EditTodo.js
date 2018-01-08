import React from 'react'
import { connect } from 'react-redux'
import { editThisTodo } from '../actions'
import { Component } from 'react'

class EditTodo extends Component {

  onHandleSubmit = (e,input) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    this.props.dispatch(editThisTodo(this.props.editing_id, input.value))
    input.value = ''
  }     

  render(){
    let input;
    return (
      <div>
        <form
          onSubmit={e => this.onHandleSubmit(e,input)}
        >
          <input
            ref={node => {
              input = node }} 
          />
          <button type="submit">
            Save Todo
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    editing_id: state.editingDetails.editing_id
  }
}

EditTodo = connect(mapStateToProps)(EditTodo)

export default EditTodo