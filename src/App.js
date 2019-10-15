import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(({ data }) => this.setState({ todos: data }))
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed
      return todo
    }) })
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(({ data }) => this.setState({ todos: [...this.state.todos, data] }))
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Route path='/' exact render={props => (
            <>
              <AddTodo addTodo={this.addTodo} />
              <Todos
                todos={this.state.todos}
                markComplete={this.markComplete}
                deleteTodo={this.deleteTodo}
              />
            </>
          )} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
