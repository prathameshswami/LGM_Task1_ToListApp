import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-11">
            <div className="card text-center my-3" style={{ width: "38rem" }}>
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <hr />
                <p className="card-text">{todo.desc}</p>
                <hr />
                <button type="button" className="btn btn-danger" onClick={() => {onDelete(todo)}}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
