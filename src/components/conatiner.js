import React, { useState } from "react";
// take input from from
// track its state
// add a function to button 
// then add item to list 
// then clear the from
// then delete the selected list item
const Container=()=>{
    const [input,setInput]=useState({
        text:"",
        id:""
    });
    const [items,setItems]=useState([]);
function handleChange(e){
    const{value}=e.target;
    setInput({
        text:value,
    });
}
function handleAdd(){  
let newList={
    text:input.text,
    id:new Date().getTime().toString(),
}
setItems([...items, newList]);
setInput({text:"",id:""})
}
function handleDelete(id){
let changedList=items.filter(eachItem=>{
    return eachItem.id!==id;
})
setItems(changedList);
}
return(
    <div className="container">
        <div className="topb">
        <h1>Todo-list<span className="material-symbols-outlined">emoji_objects</span></h1> 
        </div>
        <div className="form">
            <input onChange={handleChange} value={input.text} type="text"/>
            <button onClick={handleAdd}>Add</button>
        </div>
        <div className="list">
            <ul>
                <div className="litem">
                    {items.length===0 ? <p id="condition">Create y<span className="material-symbols-outlined">sentiment_satisfied</span>ur list</p> :null}
                    {
                        items.map(eachItem=>{
                            let {text,id}=eachItem;
                            return <li id={id} key={id} onClick={()=>handleDelete(id)}>{text}</li>
                        })
                    }
                </div>
            </ul>
        </div>
        
    
    </div>
)
}
export default Container;