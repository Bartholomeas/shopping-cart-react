import React from 'react';
import { Button } from '../../atoms/Button/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${({ isMin }) => (isMin ? '10rem' : '30rem')};
  height: ${({ isMin }) => (isMin ? '10rem' : '30rem')};
  border: 1px solid ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.bgShadeColor};
`;

const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  padding: 0 2rem;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.fontColor};
`;

const QuantityInput = styled.input`
  height: 3.5rem;
  width: 3rem;
  border: none;
`;

const ItemName = styled.div`
  font-weight: bold;
`;

const PriceTag = styled.div`
  font-weight: bold;
`;

const ItemLink = styled(Link)`
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

const CardImage = styled.p`
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

const ShopCard = ({ name, price, color = '#fff' }) => {
  return (
    <Wrapper>
      <ItemLink to="/budyn">
        <ItemName>{name}</ItemName>
        <CardImage style={{ color: color }}>?</CardImage>
      </ItemLink>
      <BottomWrapper>
        <PriceTag>${price}</PriceTag>
        <Button>Add to cart</Button>
        <QuantityInput type="number"></QuantityInput>
      </BottomWrapper>
    </Wrapper>
  );
};
export default ShopCard;
