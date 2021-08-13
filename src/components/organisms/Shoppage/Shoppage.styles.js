import styled from 'styled-components';

export const Wrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.fontColor};
`;
export const CardsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 80%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgShadeColor};
  color: ${({ theme }) => theme.colors.fontColor};
`;
