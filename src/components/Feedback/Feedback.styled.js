import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};
`;

export const CardHeader = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.accent};
`;

export const CardTitle = styled.h2`
  font-size: ${props => props.theme.spacing(6)};
  text-transform: capitalize;
  margin-bottom: 0;
`;

export const CardText = styled.p`
  font-size: ${props => props.theme.spacing(6)};
  margin: ${props => props.theme.spacing(3)}
    ${props => props.theme.spacing(3)};
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0;
`;