import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import EditTodo from '../containers/EditTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App