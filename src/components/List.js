import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, deleteTodo } = this.props;
    const list = todos.map(todo => {
      return (
        <li key={todo.id}>
          #{todo.id}
          {todo.item}
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
      );
    });
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default List;
