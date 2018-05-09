import React, { Component } from 'react'

export default class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      counter: 10
    }
  }

  handleOnClick(e) {
    this.setState({
      counter: ++this.state.counter
    });
  }


  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>{this.props.buttonText}</button>
        <span style={{marginLeft: '10px'}}>{this.state.counter}</span>
      </div>
    )
  }
}
