import React, { Component } from 'react'
import { Button, Wrapper } from './ReactButton.styles'

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
      <Wrapper>
        <h2>React Component</h2>
        <Button onClick={this.handleOnClick}>{this.props.buttonText}</Button>
        <span style={{marginLeft: '10px'}}>{this.state.counter}</span>
      </Wrapper>
    )
  }
}
