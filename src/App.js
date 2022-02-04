import React from 'react';
import './app.css';
import AddTodo from './components/AddTodo';

import TodoList from './components/TodoList';

const App = () => {
    return <>
        <h1 className='header'>Redux Todo List</h1>
        <div className='sub' style={{display: 'flex', justifyContent: 'space-between'}}>
            <h4>By <a href="https://kiranhart.com">Kiran Hart</a></h4>
            <a href="https://github.com/kiranhart/react-todo">Code</a>
        </div>
        <hr />
        <AddTodo />
        <TodoList />
    </>;
};

export default App;
