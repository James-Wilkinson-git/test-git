/* eslint-disable react/prop-types */
import React, { useState, useEffect, FC } from 'react';

interface FunctionApiExampleProps {
  title: string;
}

interface FunctionApiExampleState {
  count: number;
  todos: TodosInterface[];
}

interface TodosInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const FunctionApiExample: FC<FunctionApiExampleProps> = ({ title }) => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<TodosInterface[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });
  });
  return (
    <div>
      <h1>{title}</h1>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
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
};
export default FunctionApiExample;
