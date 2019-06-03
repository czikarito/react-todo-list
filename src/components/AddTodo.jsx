import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
       value: ""
    }
  }

  _handleOnChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  _handleTodoAdd = () => {
    this.props.onTodoAdd(this.state.value)

    this.setState({
      value: ""
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this._handleOnChange}/>
        <button onClick={() => this._handleTodoAdd()}>Add</button>
      </div>
    )
  }
}
