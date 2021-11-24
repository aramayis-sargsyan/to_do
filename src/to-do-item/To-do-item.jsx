import React from "react";
import ToDoInput from "../to-do-imput/To-do-input";
import "./To-do-item.css"

export default function ToDoItem({text,delItem,fixItem,checkItem,id,isCompleted,isEditable}){
    return (
<li className="itemContainer">
    {isEditable?<ToDoInput text={text} type={text}/>:<p className={isCompleted?"itemInputBack":"itemInput"}>
        {text}
    </p>
    }

<div className={"itemButtonContainer"}>

    <button onClick={()=>delItem(id)} className={"itemButton"}>del</button>
    <button onClick={()=>fixItem(id)} className={"itemButton"}>fix</button>
    <button onClick={()=>checkItem(id)} className={"itemButton"}>check</button>
</div>
</li>
    )}