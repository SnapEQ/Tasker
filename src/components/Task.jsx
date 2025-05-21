import { useState } from "react";
import checkbox_svg from "../assets/check_box.svg";
import delete_svg from "../assets/delete.svg";
import edit_svg from "../assets/edit.svg";


function Task(props){

    return (
    <div className="task-element">
        <p className="task-text">{props.text}</p>
        <div className="icons">
            <img src={checkbox_svg} alt="checkbox"></img>
            <img src={edit_svg} alt="edit"></img>
            <img src={delete_svg} alt="delete"></img>
        </div>
    </div>);
}


export default Task;