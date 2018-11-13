import React from 'react';

import AddTodo from './components/AddTodo';
import List from './components/List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      nextId: 0
    };
  }
  render() {
    return (
      <div>
        <h2>TodoList</h2>
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

  addTodo = item => {
    const { todos, nextId } = this.state;
    this.setState({
      todos: [...todos, { item: item, id: nextId + 1 }],
      nextId: nextId + 1
    });
  };

  deleteTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}

export default App;
