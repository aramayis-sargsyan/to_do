import React from "react";
import "./To-do-footer.css"

export default function ToDoFooter({delAll,delFix,handleFix,handleAll}){
    return(
    <div className={"footerContainer"}>
        <p className={"footerNumber"}>0/0</p>
        <button className={"footerButton"} onClick={handleAll} >all</button>
        <button className={"footerButton"} onClick={handleFix}>fix</button>
        <button className={"footerButton"} onClick={delFix}>del-fix</button>
        <button className={"footerButton"} onClick={delAll}>del-all </button>
    </div>
    )}