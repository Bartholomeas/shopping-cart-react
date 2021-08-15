import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: ${({ isMin }) => (isMin ? '90%' : '30rem')};
  height: ${({ isMin }) => (isMin ? '22rem' : '30rem')};
  border: 1px solid ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.bgShadeColor};
`;

export const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 8rem;
  padding: 0 2rem;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.fontColor};
`;

export const QuantityInput = styled.input`
  height: 3.5rem;
  width: 5rem;
  border: none;
  text-align: center;
  padding: 0 1rem;
`;

export const ItemName = styled.div`
  font-weight: bold;
`;

export const PriceTag = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: bold;
`;

export const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 1rem;
  text-decoration: none;
`;

export const CardImage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  padding: 0 2rem;
  font-size: 12rem;
  bottom: 0;
  transition: transform 0.3s;

  ${ItemLink}:hover & {
    transform: scale(1.1);
  }
`;
