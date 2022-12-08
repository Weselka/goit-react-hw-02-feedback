import styled from '@emotion/styled';

export const StatisticsBox = styled.div`
  // display: flex;
  // justify-content: center;
  margin-top: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(5)};
  // gap: ${props => props.theme.spacing(2)};
`;

export const CardText = styled.p`
  font-weight: 700;
  margin-top: ${props => props.theme.spacing(3)};
  letter-spacing: ${props => props.theme.spacing(0.2)};
  margin-bottom: 0;
`;
