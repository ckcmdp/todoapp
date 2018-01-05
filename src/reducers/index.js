import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import editingDetails from './editingDetails.js'

const todoApp = combineReducers({
  editingDetails,
  todos,
  visibilityFilter
})

export default todoApp