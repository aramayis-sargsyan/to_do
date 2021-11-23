import React, { useState } from 'react';
import ToDoInput from "../to-do-imput/To-do-input";
import "./To-do.css"

export default function ToDo () {
    const [text, setText] = useState("");

    function addItem(e,text){
        console.log(text)


    }

    function ChangeHandler(e){
        console.log(e)

    }

    return (
        <div className="container">
        <div className="header">
            <p className="text">To-Do List</p>
            <div className="inputContainer">
            <ToDoInput changeHandler = {ChangeHandler} />
            <button onClick={(e) => addItem(e,text)} className="headerButton">
                Add
            </button>
            </div>
        </div>
        </div>
    );
}