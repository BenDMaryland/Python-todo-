import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";

function Todo() {



    const [todos, setTodos] = useState([])


    
    const fetchTodos = async () => {
        const response = await fetch("http://localhost:8000/todo")
        const todos = await response.json()
        setTodos(todos.data)
    }
    useEffect(() => {
        fetchTodos()
    }, [])


    return (
        <div>
            <p>sdghsydsgy</p>
            <AddTodo todos={todos} fetchTodos={fetchTodos} />
            <p>dfydfgdyfdfygy</p>
            {todos.map((todo) => (
                <b>{todo.item}</b>
            ))}
          
        </div>
    )
}

export default Todo