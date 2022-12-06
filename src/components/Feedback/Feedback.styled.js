import styled from '@emotion/styled';

export const CardTitle = styled.h2`
  font-size: ${props => props.theme.spacing(6)};
  text-transform: capitalize;
  margin-bottom: 0;
`;

export const CardText = styled.p`
  font-weight: 200;
  letter-spacing: ${props => props.theme.spacing(0.2)};
  margin-bottom: 0;
`;

export const Button = styled.span`
  align-self: flex-start;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};
  border-radius: ${props => props.theme.spacing(4)};
  font-size: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.tagBackground};
`;