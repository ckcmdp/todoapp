const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'EDIT_THIS_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, text: action.text}
          : todo
      )
    case 'DELETE_TODO':

      return state.slice(0, state.findIndex(x => x.id === action.id))
                  .concat(state.slice(state.findIndex(x => x.id === action.id) + 1));

    default:
      return state
  }
}

export default todos