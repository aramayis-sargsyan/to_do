import React from "react";
import Input from "../input/input";
import "./item.css"

export default function Item({text,delItem,fixItem,checkItem,id,isCompleted,isEditable,changeItemText}){
    return (
<li className="itemContainer">
    {isEditable?<Input addItemEnter={changeItemText} text={text} type={text} checkItem={(e)=>checkItem(e,id)}/>:<p className={isCompleted?"itemInputBack":"itemInput" }>
        {text}
    </p>
    }

<div className={"itemButtonContainer"}>

    <button onClick={()=>delItem(id)} className={"itemButton"}>del</button>
    <button onClick={()=>fixItem(id)} className={"itemButton"}>fix</button>
    <button onClick={(e)=>checkItem(e,id)} className={"itemButton"}>check</button>
</div>
</li>
    )}