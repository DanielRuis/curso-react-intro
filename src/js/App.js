
import '../css/App.css';
import { TodoProvider } from './Context/TodoContex';
import {TodoView}from './Context/TodoView'

function App() {
  
  return (
    <>
      <TodoProvider>
        <TodoView></TodoView>
      </TodoProvider>
    </>
  )
}


export default App;
