import React, { useState } from "react";

function TodoForms(props){

  const [text,setText] = useState("");
 
  return(
    <form className="row g-2">
      <div className="w-50 input-group mb-3 forms-create">
        <input  className="form-control" onChange={handleChange} type="text" name="text" value={text}></input>
        <button className="btn btn-success" onClick={addTask}>Add</button>
      </div>
    </form>
  );

  function addTask(event){
    event.preventDefault();
    if(text){
      props.onAddTasks(text);
    }
    setText("");
  }

  function handleChange(event){
    let textTarget = event.target.value;
    setText(textTarget);
  }
}

export default TodoForms;