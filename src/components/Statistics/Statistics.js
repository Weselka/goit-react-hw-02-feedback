import { StatisticsBox, CardText } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsBox>
    <CardText>Good: {good}</CardText>
    <CardText>Neutral: {neutral}</CardText>
    <CardText>Bad: {bad}</CardText>
    <CardText>Total: {total}</CardText>
    <CardText>Positive feedback: {positivePercentage}</CardText>
  </StatisticsBox>
);
