import React, { useState } from 'react';
import ToDoInput from "../to-do-imput/To-do-input";
import  ToDoItem from "../to-do-item/To-do-item"
import ToDoFooter from "./o-do-footer/To-do-footer";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";
import "./To-do.css"

export default function ToDo () {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);



    function addItem(e,text){
        const id = generateUniqueID()
        if(text.length>0) {
            setItems((prevItems) => {
                return  [...prevItems, {text,id,isEditable:false,isCompleted:false}]
            })
            setText(()=>{
                return ""
            })
        }
    }

    function addItemEnter(e){
        const id = generateUniqueID()
        if(e.target.value.length>0&&e.key === "Enter") {
            setItems((prevItems) => {
                return prevItems = [...prevItems, {text:e.target.value,id,isEditable:false,isCompleted:false}]
            })
            setText(()=>{
                return ""
            })
        }
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
            return prevItems.map((el)=>el.id!==id?el:{...el, isCompleted:!el.isCompleted})
        })
    }

    function checkItem(id){
        setItems((prevItems) => {
            return prevItems.map((el)=>el.id!==id?el:{...el, isEditable:!el.isEditable})
        })
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

    function handleFix(){

        setFilterItems((filterItems)=>{
            return filterItems.filter((el)=> {
                return  el.isCompleted===true;
            })
        })
    }

    function handleAll(){

        setItems((prevItems)=>{
            return prevItems
        })
    }

    return (
        <div className="container">

        <div className="header">
            <p className="text">To-Do List</p>

            <div className="inputContainer">
                <ToDoInput changeHandler={changeHandler} addItemEnter={addItemEnter} type={text} text={text}/>
                <button onClick={(e) => addItem(e,text)} className="headerButton">
                Add
            </button>
            </div>

            <div>
                <ul className="asd">
                {
                    items.map((el)=>{
                        return (
                            <ToDoItem
                                text={el.text}
                                delItem={delItem}
                                fixItem={fixItem}
                                checkItem={checkItem}
                                id={el.id}
                                isCompleted={el.isCompleted}
                                isEditable={el.isEditable}
                            />
                        )
                    })
                }
                </ul>
            </div>

            <div>
                <ToDoFooter delAll={delAll} delFix={delFix} handleFix={handleFix} handleAll={handleAll}/>
            </div>

        </div>

        </div>
    );
}