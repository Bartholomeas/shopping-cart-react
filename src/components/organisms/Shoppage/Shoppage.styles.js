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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  bottom: 0;
  left: 50%;
  height: 80%;
  width: 80%;
  padding: 3rem;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.fontColor};
`;
