let todoId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: ++todoId,
    text
});

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
});

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
});