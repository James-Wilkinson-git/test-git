/* eslint-disable react/prop-types */
import { Paper } from '@material-ui/core';
import React, { useState, useEffect, FC } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard';

interface FunctionApiExampleProps {
  title: string;
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
    <Paper elevation={3} className="paperPadding">
      <h1>{title}</h1>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h3>Posts</h3>
      <ul>
        {todos.map((todo) => {
          return <DisplayCard data={todo} />;
        })}
      </ul>
    </Paper>
  );
};
export default FunctionApiExample;
