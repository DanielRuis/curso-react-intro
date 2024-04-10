function TodoItem({element}){
    return (
        <li>
            <span><img width="30" height="30" src="https://img.icons8.com/fluency/30/000000/checked.png" alt="checked"/></span>
            <p>{element.text}</p>
            <span><img width="30" height="30" src="https://img.icons8.com/color/30/cancel--v1.png" alt="cancel--v1"/></span>
        </li>

    );
}

  export { TodoItem };