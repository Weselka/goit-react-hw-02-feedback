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
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Card>
        <CardHeader>
          <CardTitle>Please leave feedback</CardTitle>
        </CardHeader>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <div>          
          {good + neutral + bad === 0 ? (
            <div message="There is no feedback"></div>
          ) : (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </div>
      </Card>
    );
  }
}

export default Feedback;
