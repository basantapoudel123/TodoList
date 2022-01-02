import React from "react";
import TodoList from "./TodoList";

const Form = ({inputTxt, sInputText,todo,setTodo, setStatus}) => {
    const inputTextHandler = e =>{
        console.log(e);
        sInputText(e.target.value);
    }

    const submitTodoHandler = e => {
        e.preventDefault();
        // console.log("Hello");
        setTodo([...todo, {text: inputTxt, completed:false, id: Math.random()*1000}])
        sInputText('');
    }

    const stateHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input value={inputTxt} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button >
            <div className="select">
                <select onChange={stateHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>

                </select>

            </div>
        </form>
    )
}

export default Form