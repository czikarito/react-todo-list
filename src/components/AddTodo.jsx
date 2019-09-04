import React, { Component } from 'react'
import { addTodo } from '../redux/actions/todoContainerActions';
import { connect } from "react-redux";

class AddTodo extends Component {
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
    this.props.addTodo(this.state.value);

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


const mapDispatchToProps = dispatch => {
  return {
    addTodo: data => {
      dispatch(addTodo(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
