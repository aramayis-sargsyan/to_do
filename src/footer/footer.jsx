import React from "react";
import "./footer.css"

export default function Footer({delAll,delFix,handleAll,fix,all}){
    return(
    <div className={"footerContainer"}>
        <p className={"footerNumber"}>{fix}/{all}</p>
        <button className={"footerButton"} onClick={()=>{handleAll("all")}} >all</button>
        <button className={"footerButton"} onClick={()=>{handleAll("fix")}}>fix</button>
        <button className={"footerButton"} onClick={delFix}>del-fix</button>
        <button className={"footerButton"} onClick={delAll}>del-all </button>
    </div>
    )}