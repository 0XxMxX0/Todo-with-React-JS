import React from "react";

function DoneIcon(props){
  if(props.done){
    return (<i alt="done" className="bi bi-check-circle-fill"></i>);
  } else {
    return (<i alt="undone" className="bi bi-check-circle"></i>);
  }
}

function List(props){

  let countTrue = props.items.filter(items => items.done === true).length;


  return(
    <ul className="list-group">
      <span className="d-flex justify-content-between align-items-center m-2">
          <span className="fw-semibold">{props.items.length} taks create</span>
          <span className="fw-semibold">{countTrue} dones</span>
      </span>
      {props.items.map(item => 
        <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
          <span>
            <button onClick={()=>{props.onItemChecked(item)}} className="btn"><DoneIcon done={item.done}></DoneIcon></button>
            <label className="form-check-label ms-2">{item.text}</label>
          </span>
          <span>
            <button onClick={()=>{props.onItemDeleted(item)}} className="btn btn-danger"><i className="bi bi-trash3-fill"></i></button>
          </span>
        </li>
      )}
    </ul>
  );
}

export default List;