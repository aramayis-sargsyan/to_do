import React from "react";
import "./To-do-input.css"

export default function ToDoInput ({changeHandler,addItemEnter,text,type}){
    console.log(text)
    return (
        <input  onChange = {changeHandler} onKeyPress={addItemEnter} className="headerInput" placeholder="Write..." value={text} type={type} />
    )
}