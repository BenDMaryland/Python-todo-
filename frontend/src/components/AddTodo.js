import React, { useEffect, useState } from "react";

function AddTodo(allTodos, fetchTodos) {

    const [item, setItem] = React.useState("")
    const [todos, setTodos] = React.useState([])

    const handleInput = event => {
        setItem(event.target.value)
    }

    const handleSubmit = (event) => {
        const newTodo = {
            "id": todos.length + 1,
            "item": item
        }

        fetch("http://localhost:8000/todo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo)
        }).then(fetchTodos)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    pr="4.5rem"
                    type="text"
                    placeholder="Add a todo item"
                    aria-label="Add a todo item"
                    onChange={handleInput}
                />

            </form>
        </div>
    )
}

export default AddTodo