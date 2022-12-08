import { Container, Section, Heading } from 'components';

import Feedback from 'components/Feedback/Feedback';

export const App = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading marginBottom="50px" textAlign="center">
            Cafe "Expresso"
          </Heading>
          <Feedback />
        </Container>
      </Section>
    </>
  );
};
