import { Component } from 'react';

import {
  Heading,
  Container,
  Section,
  FeedbackOptions,
  Notification,
  Statistics,
} from 'components';

export class App extends Component {
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
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Cafe "Expresso"
        </Heading>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
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
        </Section>
      </Container>
    );
  }
}
