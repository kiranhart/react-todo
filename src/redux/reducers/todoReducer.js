const reducer = (state = [], action) => {
    switch(action.type) {
    case 'ADD_TODO':
        return [
            ...state, {
                id: action.id,
                text: action.text,
                completed: false
            }
        ];
    case 'REMOVE_TODO':
        return state.filter((todo) => todo.id !== action.id);
    default:
        return state;
    }
};

export default reducer;