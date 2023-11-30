import React, { useState } from "react";
import List from "./List";
import TodoForms from "./TodoForms";
import "./Todo.css";
import Item from "./Item";

function Todo(){

  const [items, setItems] = useState([]);

  function onAddTasks(text){
    let item = new Item(text);
    setItems([...items, item]);
  }

  function onItemDeleted(item){
    let filteredItem = items.filter(itemFilter => itemFilter.id !== item.id);
    setItems(filteredItem);
  }

  function onItemChecked(item){
    let updateItems = items.map(it=>{
      if(it.id === item.id){
        it.done = !it.done;
      }
      return it;
    });
    setItems(updateItems);
  }

  return (
    <div className="container p-4">
      <h1>TODO</h1>
      <TodoForms onAddTasks={onAddTasks}></TodoForms>
      <List onItemChecked={onItemChecked} onItemDeleted={onItemDeleted} items={items}></List>
    </div>
  )
}

export default Todo;