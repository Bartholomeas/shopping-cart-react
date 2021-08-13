import styled from 'styled-components';

export const Button = styled.button`
  width: 13rem;
  height: 3rem;
  background: none;
  color: ${({ theme }) => theme.colors.secondColor};
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  font-weight: bold;
  cursor: pointer;
`;
