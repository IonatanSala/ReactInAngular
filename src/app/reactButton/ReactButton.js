import React, { Component } from 'react'

export default class ReactButton extends Component {
  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    const counter = this.props.CounterSerivce.getCounter();

    this.setState({
      counter: counter
    });
  }

  handleOnClick(e) {
    const currentCount = ++this.state.counter;

    this.props.CounterSerivce.setCounter(currentCount);

    const newCount = this.props.CounterSerivce.getCounter();

    this.setState({
      counter: newCount
    });
  } // end handleOnClick


  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>{this.props.buttonText}</button>
        <span style={{marginLeft: '10px'}}>{this.state.counter}</span>
      </div>
    )
  }
}
