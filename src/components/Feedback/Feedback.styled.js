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