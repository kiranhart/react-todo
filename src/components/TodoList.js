import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector((store) => store.todos);

    return todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />; 
    });
};

export default TodoList;
