import React, { useState } from 'react';
import  Item from "../item/item"
import Footer from "../footer/footer";
import Header from "../header/header";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";
import "./To-do.css"

export default function ToDo () {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("all");
    const [validText, setValidText] = useState("");

    function addItem(e,text){
        const id = generateUniqueID()
        if(text.trim().length>=6) {
            setValidText((validText)=>{
                return ""
            })
            setItems((prevItems) => {
                return  [...prevItems, {text,id,isEditable:false,isCompleted:false,isEmpty:false}]
            })
            setText(()=>{
                return ""
            })
        }else {
            setValidText((validText)=>{
                return "afa as gfas gdsg dfghd fdg hfd h"
            })
        }
    }

    function addItemEnter(e){
        const id = generateUniqueID()
        if(e.target.value.trim().length>=6&&e.key === "Enter") {
            setValidText((validText)=>{
                return ""
            })
            setItems((prevItems) => {
                return prevItems = [...prevItems, {text:e.target.value,id,isEditable:false,isCompleted:false, isEmpty:false}]
            })
            setText(()=>{
                return ""
            })
        }else if(e.key === "Enter"){
            setValidText((validText)=>{
                return "afa as gfas gdsg dfghd fdg hfd h"
            })
        }
    }

    function changeItemText(e){
        setItems((prevItems) => {
            prevItems.find((el)=>{
                return el.isEditable
            }).text =e.target.value
            return prevItems
        })
    }

    function changeHandler(e){
        setText(()=>{
            return  e.target.value
        })
    }

    function delItem(id){
        setItems((prevItems) => {
                return prevItems.filter((el)=>el.id!==id)
        })
    }

    function fixItem(id){
        setItems((prevItems) => {
            return prevItems.map((el)=>{
              return el.id!==id?el:{...el, isCompleted:!el.isCompleted}
            })
        })
    }

    function checkItem(e,id) {
        if (e.key === "Enter") {
            items.find((el)=>{
                console.log(el)
                return el.id===id
            }).text=e.target.value
            setItems((prevItems) => {
                return prevItems.map((el) => {
                    return el.id !== id ? el : {
                        ...el, isEditable: !el.isEditable
                    }
                })
            })
        }
        if(e.type==="click"){
            setItems((prevItems) => {
                return prevItems.map((el) => {
                    return el.id !== id ? el : {
                        ...el, isEditable: !el.isEditable
                    }
                })
            })
        }
    }

    function delAll(){
        setItems(()=>{
            return []
        })
    }

    function delFix(){
        setItems((prevItems)=>{
            return prevItems.filter((el)=> {
                return  el.isCompleted===false;
            })

        })
    }

    function handleAll(e){
        setFilter(()=>{
            return e
        })
    }

    return (
    <div className="container">
        <div className={"header1"}>

            <Header changeHandler={changeHandler} addItemEnter={addItemEnter} text={text} addItem={addItem} validText={validText}/>

            <div>
                <ul className="asd">
                {
                    filter==="fix"?
                        items.filter((el)=>el.isCompleted)
                            .map((el)=>{
                        return (
                            <Item
                                key={el.id}
                                text={el.text}
                                delItem={delItem}
                                fixItem={fixItem}
                                checkItem={checkItem}
                                id={el.id}
                                isCompleted={el.isCompleted}
                                isEditable={el.isEditable}
                                changeItemText={changeItemText}
                                isEmpty={el.isEmpty}
                            />
                        )
                    }): items.map((el)=>{
                            return (
                                <Item
                                    key={el.id}
                                    text={el.text}
                                    delItem={delItem}
                                    fixItem={fixItem}
                                    checkItem={checkItem}
                                    id={el.id}
                                    isCompleted={el.isCompleted}
                                    isEditable={el.isEditable}
                                    changeItemText={changeItemText}
                                    isEmpty={el.isEmpty}
                                />
                            )
                        })
                }
                </ul>
            </div>

            <Footer delAll={delAll} delFix={delFix} handleAll={handleAll} fix={items.filter((el)=> el.isCompleted).length} all={items.length}/>

        </div>
    </div>
    );
}
