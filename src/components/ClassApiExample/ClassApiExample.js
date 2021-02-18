import React, { Component } from "react";

export class ClassApiExample extends Component {
  constructor() {
    super();
    this.state = {
      nameOfState: "Hi, Im also State",
      count: 0,
      todos: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ todos: json });
      });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <h3>Posts</h3>
        <ul>
          {this.state.todos.map((todo) => {
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
