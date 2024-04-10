import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import React from 'react';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoListItems } from './TodoListItems';
import { TodoCoder } from './TodoCoder';
import './App.css';


function App() {
  const defaultValues =[
    {id: 1, text: "Ver Dune 2", completado: true},
    {id: 2, text: "Comprar la carne", completado: true},
    {id: 3, text: "Ir a hacer ejercicio", completado:false},
    {id: 4, text: "Finalizar el curso de React.js", completado:false},
    {id: 5, text: "Terminar el modulo de almacen y de mantenimiento", completado:false},
    {id: 6, text: "Terminar el modulo de almacen y de mantenimiento", completado:false},
    {id: 7, text: "Terminar el modulo de almacen y de mantenimiento", completado:false},
    {id: 8, text: "Terminar el modulo de almacen y de mantenimiento", completado:false},
    {id: 9, text: "Terminar el modulo de almacen y de mantenimiento", completado:false},
  ]
  const completados = defaultValues.filter(element => element.completado === true).length;
  return (
    <React.Fragment>
      <div className="contenedor">
        
        <TodoListItems>
          <TodoSearch/>
          <TodoList>
            {defaultValues.map((element)=>(
              <TodoItem 
                key={element.id}
                element={element}
              />
            ))}
            </TodoList>
        </TodoListItems>

        <div className="columna">
          <TodoCounter
            completados={completados}
            total={defaultValues.length}
          />
          <TodoCoder/>
        </div>
      </div>

    </React.Fragment>
  )
}
/*


        <TodoButton/>
*/


export default App;
