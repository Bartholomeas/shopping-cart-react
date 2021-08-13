import React from 'react';
import { Button } from '../../atoms/Button/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 30rem;
  border: 1px solid ${({ theme }) => theme.colors.fontColor};
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
const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  padding: 0 2rem;
  font-size: 10rem;

  bottom: 0;
`;

const QuantityInput = styled.input`
  height: 3.5rem;
  width: 3rem;
  border: none;
`;

const PriceTag = styled.div``;

const ShopCard = () => {
  return (
    <Wrapper>
      <TopWrapper>?</TopWrapper>
      <BottomWrapper>
        <PriceTag>$50</PriceTag>
        <Button>Add to cart</Button>
        <QuantityInput type="number"></QuantityInput>
      </BottomWrapper>
    </Wrapper>
  );
};
export default ShopCard;
