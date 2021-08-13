import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

export const LightenText = styled.span`
  color: ${({ theme }) => theme.colors.secondColor};
  font-weight: bold;
`;

export const HeaderText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 10rem;
  width: 50%;
  line-height: 90%;
`;
