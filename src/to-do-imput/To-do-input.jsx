import React from "react";
import "./To-do-input.css"

export default function ToDoInput (changeHandler){
    console.log(changeHandler)
    return (
        <input onChange={changeHandler} className="headerInput" placeholder="Write..." />
    )
}