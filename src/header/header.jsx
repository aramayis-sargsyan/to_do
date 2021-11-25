import React from "react";
import "./header.css"

export default function Header({changeHandler, addItemEnter, text, addItem,validText}){
    return(
    <>
        <p className="text">To-Do List</p>

        <div className="inputContainer">
            <input onChange={changeHandler} onKeyPress={addItemEnter} className="headerInput" placeholder="Write..." type={text} value={text} />
            <button onClick={(e) => addItem(e,text)} className="headerButton">
                Add
            </button>
        </div>

        <p className={"validText"}>{validText}</p>
    </>
    )
}