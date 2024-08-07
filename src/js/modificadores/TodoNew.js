import React,{ useContext }  from "react";
import { Context } from '../Context/TodoContex';

function valueState(state){
    return (state) ? "newItem":"newItem oculto"
}

function TodoNew(){
    const { stateNew, setStateNew, newTask } = useContext(Context);
    const clase = valueState(stateNew);
    const [taskValue, setTask]=React.useState("");
    return(
        <div className={clase} id="newTaskView">
            <div className="card">
                <h2>Nueva Tarea!</h2>
                <input 
                    placeholder="Añade la nueva tarea"
                    onKeyUp={(event)=>{
                        setTask(event.target.value);
                    }}
                />
                <br/>
                <div className="row final">
                    <button className="boton cancel" onClick={()=>{
                        setStateNew(!stateNew);
                    }}>Cancelar</button>
                    <button className="boton save"
                        onClick={()=>{
                            if(newTask(taskValue)){
                                setStateNew(!stateNew);
                            }else{
                                console.log("no se pudo");
                            }
                        }}
                    > Guardar</button>
                </div>
            </div>
        </div>
    );
}
export {TodoNew}