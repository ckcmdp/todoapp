const initialState = {
	editing_id: null,
	editing: false
}
const editingDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_TODO':
      return {...state,
        
          editing_id: action.id,
          editing: true
        
    }
    case 'EDIT_THIS_TODO':
 	return {...state,
        
          editing_id: null,
          editing: false
        
    }
    default:
      return state
  }
}

export default editingDetails