import React from "react";
import "./input.css"

export default function Input ({changeHandler,text,type,checkItem}){
    return (
        <input onChange={changeHandler}  onKeyPress={checkItem} className="defaultInput"  defaultValue={text} type={type} />
    )
}