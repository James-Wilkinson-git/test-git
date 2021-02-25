import React, { Component } from 'react';

interface ClassApiExampleProps {
  title: string;
}

interface ClassApiExampleState {
  count: number;
  todos: TodosInterface[];
}

interface TodosInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class ClassApiExample extends Component<
  ClassApiExampleProps,
  ClassApiExampleState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      todos: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ todos: json });
      });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { title } = this.props;
    const { count, todos } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>You clicked {count} times</p>
        <button
          type="button"
          onClick={() => this.setState({ count: count + 1 })}
        >
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
  }
}
export default ClassApiExample;
