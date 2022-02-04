import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/actions';

const Todo = ({todo}) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    return <StyledTodo>
        <p><small>{todo.id}</small>. {todo.text}</p>
        <RemoveButton onClick={handleRemove}>X</RemoveButton>
    </StyledTodo>;
};

const StyledTodo = styled.div`
    padding: 20px;
    margin-bottom: 10px;
    background-color: #2d2d2d;
    display: flex;
    justify-content: space-between;
    align-items: center;

    small {
        font-size: 1rem;
        font-weight: bold;
    }

    p {
        color: white;
        font-size: 1.2rem;
        font-weight: 400;
    }
`;

const RemoveButton = styled.button`
    background: red;
    border: none;
    color: white;
    padding: 10px 15px;
    transition: background 0.3s ease;

    &:hover {
        cursor: pointer;
        background: #b40c0c;
    }
`;

export default Todo;
