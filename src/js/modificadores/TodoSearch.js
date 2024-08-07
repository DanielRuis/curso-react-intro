import React, { useState, useContext } from 'react';
import { Context } from '../Context/TodoContex';
function TodoSearch(){
    const { searchValue, setState, statusTodos } = useContext(Context);
    return(
        <React.Fragment>
            <div className="buscador">
                <input 
                    placeholder="Hola mundo"
                    value={searchValue}
                    onChange={(event)=>{
                        setState(event.target.value);
                        
                    }}
                />

            </div>
            <div className="TextoBuscador">
                <p>Se esta buscando: {searchValue}</p>
                <p>Estado: {statusTodos.error ? "Error" : (statusTodos.empty ? "Sin datos" : "Sin error")}</p>
            </div>
        </React.Fragment>
    ); 
}

export {TodoSearch};