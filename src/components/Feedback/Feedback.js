import { Component } from 'react';

import { CardText, CardTitle, Button } from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = event => {
    console.log('click on Good');
    console.log(event.target);
  };
  handleIncrementNeutral = event => {
    console.log('click on Neutral');
  };
  handleIncrementBad = event => {
    console.log('click on Bad');
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div>
        <CardTitle>Please leave feedback</CardTitle>

        <Button type="button" onClick={this.handleIncrementGood}>
          Good
        </Button>
        <Button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </Button>
        <Button type="button" onClick={this.handleIncrementBad}>
          Bad
        </Button>
        <CardText>Statistics</CardText>
        <CardText>Good {good}</CardText>
        <CardText>Neutral {neutral}</CardText>
        <CardText>Bad {bad}</CardText>
      </div>
    );
  }
}

export default Feedback;
