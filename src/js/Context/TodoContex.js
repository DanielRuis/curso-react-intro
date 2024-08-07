import { createContext } from "react";
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import useLS from '../Hooks/UseLs';
const Context = createContext();

function TodoProvider({ children }) {
    const [todos, setTodos, statusTodos] = useLS("todosReact", ['']);
    const completados = todos.filter(element => !!element.completado).length;

    const [loaded, setLoaded] = useState(false);

    const [searchValue, setState] = useState('');

    const todosToShow = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });

    //?Efecto que actua al escribir en el buscador
    useEffect(() => {
        if (todosToShow.length === 0 && loaded) {
            toast('No hay coincidencias', {
                icon: '⚠️',
                style: {
                    borderRadius: '30px',
                    background: '#2D2D12',
                    color: '#FFF9BD',
                    border: "solid 1px #FDFD4A ",
                    minWidth: "10em"
                },
                id: 'tasksWarning',
            });
        }
    }, [searchValue]);

    //?Efecto que se ejecuta cada vez que statusTodos cambie
    useEffect(() => {
        if (statusTodos.loading) {
            toast('Cargando datos...', {
                icon: '⏳',
                style: {
                    borderRadius: '30px',
                    background: '#2D2D12',
                    color: '#FFF9BD',
                    border: "solid 1px #FDFD4A ",
                    minWidth: "10em",
                },
                id: "loader"
            });
        } else if (!statusTodos.loading) {
            toast('Busqueda finalizada...', {
                style: {
                    borderRadius: '30px',
                    background: '#271946',
                    color: "#C5ABFB",
                    border: "solid 1px #C5ABFB ",
                    minWidth: "10em"
                },
                id: "loader"
            });
            setLoaded(true);
        }
        if (statusTodos.empty && !statusTodos.loading) {
            toast('No hay tareas', {
                icon: '⚠️',
                style: {
                    borderRadius: '30px',
                    background: '#2D2D12',
                    color: '#FFF9BD',
                    border: "solid 1px #FDFD4A ",
                    minWidth: "10em"
                },
                id: 'tasksWarning',
            });
        }
        if (statusTodos.error) {
            toast.error('Error al cargar los datos: ' + statusTodos.message, {
                style: {
                    borderRadius: '30px',
                    background: '#571D1D',
                    color: '#FAD2D2',
                    border: "solid 1px #FF9999",
                    minWidth: "10em"
                },
            });
        }
    }, [statusTodos]);

    const [stateNew, setStateNew] = useState(false);

    //?Función para completar una tarea
    const completeTodo = (key) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === key);

        if (todoIndex !== -1) {
            newTodos[todoIndex].completado = true;
            setTodos(newTodos);
            toast('Tarea completada!', {
                icon: '👏',
                style: {
                    borderRadius: '30px',
                    background: '#264825',
                    color: '#C4FF99',
                    border: "solid 1px #C4FF99",
                    minWidth: "10em"
                },
            });
        } else {
            console.error('Todo item not found:', key);
        }
    };

    //?Función para eliminar una tarea
    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
            newTodos.splice(todoIndex, 1);
            setTodos(newTodos);
            toast.error('Tarea eliminada', {
                style: {
                    borderRadius: '30px',
                    background: '#571D1D',
                    color: '#FAD2D2',
                    border: "solid 1px #FF9999",
                    minWidth: "10em"
                },
            });
        } else {
            console.error('Todo item not found:', id);
        }
    };

    //?Función para agregar una tarea
    const newTask = (task) => {
        let estado = false;
        if (task != null) {
            const newId = (todos.length > 0) ? todos[todos.length - 1].id + 1 : 1;
            const newTodos = [...todos];
            newTodos.push({
                id: newId,
                text: task,
                completado: false
            });
            setTodos(newTodos);
            toast.success('Tarea añadida', {
                style: {
                    borderRadius: '30px',
                    background: "#183F5F",
                    color: "#7FEEFF",
                    border: "solid 1px #5ACFFF",
                    minWidth: "10em"
                }
            });
            estado = true;
        }
        return estado;
    };

    return (
        <Context.Provider value={{
            stateNew,
            setStateNew,
            setTodos,
            todos,
            newTask,
            searchValue,
            setState,
            statusTodos,
            todosToShow,
            completados,
            deleteTodo,
            completeTodo
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, TodoProvider };
