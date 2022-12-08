import { ControlsBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onCountPositive,
  onCountNeutral,
  onCountNegative,
}) => (
  <ControlsBox>
    <Button type="button" onClick={onCountPositive}>
      Good
    </Button>
    <Button type="button" onClick={onCountNeutral}>
      Neutral
    </Button>
    <Button type="button" onClick={onCountNegative}>
      Bad
    </Button>
  </ControlsBox>
);