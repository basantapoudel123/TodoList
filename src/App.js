import React, { useState, useEffect } from 'react'

import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
 
  // State Here
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState('All');
  const[filterTodos, setFilterTodos] = useState([]);

  // Run Once when the App Start
  useEffect(() => {
    getLocalTodos();
  }, [])

   // USE EFFECT
   useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  // Function Calls
  const filterHandler = () =>{
    switch(status) {
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break; 
      default:
        setFilterTodos(todos); 
        break;
    }
  };

  // Save to Local
const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


const getLocalTodos = () => {
  if(localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
  else {
    const todoLocal = JSON.parse(localStorage.getItem("todos"))
    setTodos(todoLocal);
  }
}

  return (
    <div className="App">
      <header>
        <h2>My Todo List </h2>
      </header>
      <Form
          inputTxt={inputText}
          todo={todos} 
          setTodo={setTodos} 
          sInputText={setInputText}
          setStatus={setStatus}
        />
      <TodoList 
          todos={todos}
          setTodos={setTodos}
          filterTodos={filterTodos}
          />
    </div>
  );
}

export default App;
