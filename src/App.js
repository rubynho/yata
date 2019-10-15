import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

class App extends Component {
  state = {
    todos: []
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed
      return todo
    }) })
  }

  deleteTodo = (id) => (
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  )

  addTodo = (title) => {
    const newTodo = {
      title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className='container'>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
