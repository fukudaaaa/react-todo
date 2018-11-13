import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
  }

  render() {
    return (
      <div>
        <h5>AddTodo</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.item}
          />
          <input type="submit" value="ADD TODO" />
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.item);
    this.setState({ item: '' });
  };

  handleChange = event => {
    const item = event.target.value;
    this.setState({ item: item });
  };
}

export default AddTodo;
