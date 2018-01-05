import React from 'react'
import PropTypes from 'prop-types' 
import EditTodo from '../containers/EditTodo'

const Todo = ({editingStatus, onEditButtonClick, onDeleteButtonClick, onClick, completed, text }) => (

  <div>
    <li
      onClick={onClick}
      style={ {
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    {editingStatus ?<EditTodo />:<button onClick={onEditButtonClick}>
      Edit Todo
    </button>}
    <button onClick={onDeleteButtonClick}>
      Delete Todo
    </button>
  </div>
  
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo