import { Component } from 'react';

import { Card, CardHeader, CardTitle } from './Feedback.styled';
import { FeedbackOptions } from 'components';
import { Statistics } from 'components';

class Feedback extends Component {
  // static defoultProps = {};
  // static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  countPositiveFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  countNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  countNegativeFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.bad + prevState.neutral + prevState.neutral,
    }));
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Please leave feedback</CardTitle>
        </CardHeader>
        <FeedbackOptions
          onCountPositive={this.countPositiveFeedback}
          onCountNeutral={this.countNeutralFeedback}
          onCountNegative={this.countNegativeFeedback}
          onLeaveFeedback={this.countNegativeFeedback}
        />

        <div>
          {this.state.visible && (
            <Statistics
              title="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          )}
        </div>
      </Card>
    );
  }
}

export default Feedback;