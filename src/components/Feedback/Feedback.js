import { Component } from 'react';

import { Container, Section } from 'components';
import { Card } from './Feedback.styled';
import { FeedbackOptions } from 'components';
import { Notification } from 'components';
import { Statistics } from 'components';

export class Feedback extends Component {
  // static defoultProps = {};
  // static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = optionState => {
    this.setState(prevState => {
      return {
        [optionState]: prevState[optionState] + 1,
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
    const {
      state,
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <Card>
        <Section title={'Please leave feedback'}>
          <Container>
            <FeedbackOptions
              options={Object.keys(state)}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Container>
        </Section>

        <Section title={'Statistics'}>
          <Container>
            {countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback"></Notification>
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            )}
          </Container>
        </Section>
      </Card>
    );
  }
}