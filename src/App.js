import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Finde simple project to build and learn React',
        completed: false
      },
      {
        id: 2,
        title: 'Start working on the project',
        completed: false
      },
      {
        id: 3,
        title: 'Finish the project',
        completed: false
      }
    ]
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

  render() {
    return (
      <div className='container'>
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
