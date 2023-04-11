import React from 'react'
import './TodoList.css'
import { useState, useEffect } from 'react'
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const guardadoTodos = localStorage.getItem('todos');
        if (guardadoTodos) {
            return JSON.parse(guardadoTodos)
        } else {
            return [];
        }
    });

    const [inputValue, setInputValue] = useState('');

    const agregarTodo = (text) => {
        setTodos([...todos, text]);
    }

    const borrarTodo = (todoABorrar) => {
        const actualizarTodos = todos.filter((todo) => todo !== todoABorrar);
        setTodos(actualizarTodos);
    }

    const manejadorSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim()) {
            agregarTodo(inputValue);
            setInputValue('');
        }

    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, { todos })


    return (
        <div>
            <h1>Lista de Tareas Pendientes</h1>
            <form onSubmit={manejadorSubmit}>
                <input type="text" placeholder='Agrega una tarea' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type='submit'>Agregar</button>
            </form>
            <ul>
                {
                    todos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            todo={todo}
                            borrarTodo={borrarTodo}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList