import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";

function App() {

  let initTodo;

  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete Function of task ", todo.srno);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    
    // localStorage.setItem("todos",JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am Adding this ToDo.")

    let srno = (todos.length>0)?todos[todos.length-1].srno + 1 : 1;

    const myTodo = {
      srno : srno,
      title : title,
      desc : desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)

  }


  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
      <Header title="To Do List" searchBar={true} />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <AddTodo addTodo = {addTodo}/>
          </div>
          <div className="col">
            <Todos todos={todos} onDelete={onDelete} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
