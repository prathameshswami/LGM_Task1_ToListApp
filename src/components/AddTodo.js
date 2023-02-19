import React, { useState } from "react";

export default function AddTodo(props) {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e)=>{
        e.preventDefault();

        if(!title || !desc){
            alert("Title or Description Cannot be blank")
        }
        else{
            props.addTodo(title,desc);
        }

        setTitle("");
        setDesc("")
    }

  return (
    <>
      <div className="container my-3">
        <form onSubmit={submit}>
          <label className="form-label">
            <h4><strong><u>Add A Todo</u></strong></h4>
          </label>
          <div className="mb-3">
            <label className="form-label"><h5><strong>Title</strong></h5></label>
            <input
              type="text"
              className="form-control"
              id="todoTitle"
              value={title}
              onChange = {(e) => {
                setTitle(e.target.value)
              }}
              placeholder="Enter a title"
            />  
          </div>
          <div className="mb-3">
            <label className="form-label"><h5><strong>Description</strong></h5></label>
            <textarea
              className="form-control"
              id="todoDesc"
              value={desc}
              onChange = { (e) => {
                setDesc(e.target.value)
              }}
              rows="2"
            ></textarea>
            <button type="submit" className="btn btn-success my-3">Add Todo</button>
          </div>
        </form>
      </div>
    </>
  );
}
