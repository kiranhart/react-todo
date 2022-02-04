import React, {useRef} from 'react';
import styled from 'styled-components';
import { addTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    const handleAdd = () => {
        const text = inputRef.current.value;
        if (text.length === 0) return;
        dispatch(addTodo(text));
        inputRef.current.value = '';
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return <Wrapper>
        <Input ref={inputRef} onKeyDown={handleEnter} type='text' placeholder='Enter todo' />
        <Add onClick={handleAdd}>+</Add>
    </Wrapper>;
};

const Wrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
`;

const Input = styled.input`
    padding: 15px 20px;
    border: none;
    width: 90%;
    font-size: 1rem;

    &:focus {
        outline: none;
    }
`;

const Add = styled.button`
    background: #67dc67;
    color: white;
    font-size: 2rem;
    border: none;
    width: 60px;

    &:hover {
        cursor: pointer;
        background: #4aa64a;
    }
`;

export default AddTodo;
