import React, { Component } from 'react';
import './app.css';
import { connect } from "react-redux";
import * as ActionCreators from './actions'
import TodoList from './components/todoList'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Header from './components/header'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { todoInputValue: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ todoInputValue: event.target.value });
    this.checkIfTitleExist(event.target.value) ? this.props.invalidInput() : this.props.validInput()
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.props.globalState.isLoading && this.props.globalState.validInput && this.state.todoInputValue !== '') {
      await this.props.addTodo(this.state.todoInputValue)
      await this.props.getTodos()
      this.setState({ todoInputValue: '' })
    }
  }

  async handleDelete(id) {
    await this.props.deleteTodo(id)
    await this.props.getTodos()
  }

  async handleToggleTodo(id) {
    await this.props.toggleTodo(id)
    await this.props.getTodos()
  }

  componentDidMount() {
    this.props.getTodos()
  }

  // Used for input control.
  // Not sensitive to capital letters, but trims space from string end
  checkIfTitleExist(title) {
    let bool = false
    this.props.globalState.todos.forEach(element => {
      if (Object.values(element).indexOf(title.trim()) > -1) {
        bool = true
      }
    });
    return bool
  }


  render() {

    let x = { ...this.props }
    console.log('propssssss', x)

    return (
      <div className="App">
        <Paper elevation={2} className="MainPaperContainer">
          <Header loading={this.props.globalState.isLoading} />
          <TodoList todos={this.props.globalState.todos} delete={this.handleDelete} toggle={this.handleToggleTodo} />
          <Divider />
          <div className="inputSectionContainer">
            <form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
              <TextField
                id="addTodoField"
                label="Todo"
                margin="normal"
                variant="outlined"
                value={this.state.todoInputValue}
                onChange={this.handleChange}
                fullWidth={true}
                error={!this.props.globalState.validInput}
                autoFocus={false}
              />
            </form>
            <div className="addTodoButtonWrapper">
              <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
                <AddIcon />
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}



const mapStateToProps = state => {
  let globalState = state

  return { globalState }
}

const mapDispatchToProps = {
  ...ActionCreators
}

TodoList.propTypes = {
  toggleTodo: PropTypes.func,
  getTodo: PropTypes.func,
  addTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  invalidInput: PropTypes.func,
  validInput: PropTypes.func,
  loading: PropTypes.func,
  error: PropTypes.func,
  
  globalState: PropTypes.objectOf({
    isLoading: PropTypes.bool.isRequired,
    validInput: PropTypes.string.isRequired,
    todos: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(App);





// 1. could use ref on submit instead of hangleChange(), but handlechange enables us to control input on key press.

// 2. caption typhography
