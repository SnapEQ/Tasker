import { useState } from "react";
import { HiCheck, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";



function Task(props) {

    const [isInEditMode, setIsInEditMode] = useState(props.isInEditMode)
    const [editText, setEditText] = useState(props.text);


    function handleSubmit(e) {
        e.preventDefault();
        props.updateTextFunc(props.id, editText);
        setIsInEditMode(false);
    }

    const message = isInEditMode ?
        <form onSubmit={handleSubmit}>
            <input 
                className="task-input"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                autoFocus
            />
            <button type="submit" className="task-submit">Save</button>

        </form> :
        props.completed ?
            <p className="task-text"><del>{props.text}</del></p> :
            <p className="task-text">{props.text}</p>




    return (
        <div className="task-element" key={props.id}>
            {message}
            <div className="icons">
                <button onClick={() => props.doneFunc(props.id)}>
                    <HiCheck className="icon" />
                </button>
                <button onClick={() => {
                    props.editFunc(props.id);
                    setIsInEditMode(prevEdit => !prevEdit)
                }}>
                    <HiOutlinePencilAlt className="icon" />
                </button>
                <button onClick={() => props.deleteFunc(props.id)}>
                    <HiOutlineTrash className="icon" />
                </button>
            </div>
        </div>);
}


export default Task;