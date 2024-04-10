function TodoListItems(props){
    return(
        <div className="contenedorItems">
            {props.children}
        </div>
    );
}
export {TodoListItems}