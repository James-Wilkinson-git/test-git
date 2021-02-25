import React from 'react';
import { ClassApiExample } from './components/ClassApiExample/ClassApiExample';
import FunctionApiExample from './components/FunctionApiExample/FunctionApiExample';

import './overrides.css';

function App() {
  return (
    <div className="App">
      <ClassApiExample title="Hi, I'm a Class Component" />
      <FunctionApiExample title="Hello I'm a Function Component" />
    </div>
  );
}

export default App;
