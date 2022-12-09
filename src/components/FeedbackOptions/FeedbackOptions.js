import { ControlsBox, Button } from './FeedbackOptions.styled';
// import { Container, Section } from 'components';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section title={'Statistics'}>
      <ControlsBox>
        {options.map(feedback => {
          return (
            <li key={feedback}>
              <Button onClick={() => onLeaveFeedback(feedback)}>
                {feedback}
              </Button>
            </li>
          );
        })}
      </ControlsBox>
    </section>
  );
};