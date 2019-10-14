import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => (
    {
      background: '#f4f4f4',
      borderBottom: '1px #ccc dotted',
      padding: '10px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  )

  render() {
    const { id, title } = this.props.todo

    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />
          {title}
          <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
