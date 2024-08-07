
function TodoItem({element, onComplete, onDelete}){
    const classValue = element.completado ? "checked" : "";
    return (
        <li>
            {
                !element.completado && (
                    <span onClick={onComplete} >
                        <img width="30" height="30" src="https://img.icons8.com/fluency/30/000000/checked.png" alt="checked"/>
                    </span>
                )
            }
            <p itemID={element.id} className={
                classValue
            }>{element.text}</p>

            <span><img width="30" height="30" src="https://img.icons8.com/color/30/cancel--v1.png" alt="cancel--v1" onClick={onDelete}/></span>
        </li>

    );
}

  export { TodoItem };