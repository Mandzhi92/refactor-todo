import { Component } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
 
  state = { value: '' };

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    const { addNewTask } = this.props;
    if (!value) {
      return;
    }
    
    addNewTask(value);
    this.setState({ value: '' });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="new-todo"
            type="text"
            placeholder="What needs to be done?"
            onChange={this.handleChange}
            value={value}
          />
        </form>
      </header>
    );
  }
}

NewTaskForm.propTypes = {
  addNewTask: PropTypes.func.isRequired,
};


