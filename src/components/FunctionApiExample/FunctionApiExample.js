import React, { useState, useEffect } from "react";

export default function FunctionApiExample({ title }) {
  const initialState = "Hi, Im State";
  const [nameOfState, setNameOfState] = useState(initialState);
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json);
      });
  });
  return (
    <div>
      <h1>{title}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h3>Posts</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="list">
              <span className="repo-text">Title: {todo.title} </span>
              <span className="repo-description">Body: {todo.body}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
