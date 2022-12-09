import { StatisticsBox, StatisticsItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsBox>
    <StatisticsItem>Good: {good}</StatisticsItem>
    <StatisticsItem>Neutral: {neutral}</StatisticsItem>
    <StatisticsItem>Bad: {bad}</StatisticsItem>
    <StatisticsItem>Total: {total}</StatisticsItem>
    <StatisticsItem>Positive feedback: {positivePercentage} %</StatisticsItem>
  </StatisticsBox>
);
