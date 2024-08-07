import React, { useContext } from "react";
import { Toaster } from 'react-hot-toast';
import { TodoSearch } from '../modificadores/TodoSearch';
import { TodoList } from '../lectores/TodoList';
import { TodoItem } from '../lectores/TodoItem';
import { TodoListItems } from '../lectores/TodoListItems';
import { TodoCoder } from '../otros/TodoCoder';
import { TodoNew } from '../modificadores/TodoNew';
import { TodoCounter } from '../lectores/TodoCounter';
import { Context } from "./TodoContex";

const TodoView = () => {
    const {
        todosToShow,
        completeTodo,
        deleteTodo
    } = useContext(Context);

    return (
        <>
            <Toaster
                position="bottom-left"
                reverseOrder={true}
            />
            <TodoNew />
            <div className="contenedor">
                <TodoListItems>
                    <TodoSearch />
                    <TodoList>
                        {todosToShow.map((element) => (
                            <TodoItem
                                key={element.id}
                                element={element}
                                onComplete={() => completeTodo(element.id)}
                                onDelete={() => deleteTodo(element.id)}
                            />
                        ))}
                    </TodoList>
                </TodoListItems>
                <div className="columna">
                    <TodoCounter />
                    <TodoCoder />
                </div>
            </div>
        </>
    );
}

export { TodoView };
