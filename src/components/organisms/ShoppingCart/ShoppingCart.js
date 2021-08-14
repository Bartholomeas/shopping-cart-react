import React, { useContext } from 'react';
import styled from 'styled-components';
import ShopCard from '../../molecules/ShopCard/ShopCard';
import { CardsContext } from '../../../providers/AppProvider';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 25rem;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.bgShadeColor};
`;

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  width: 100%;
  height: 100%;
`;

export const CartTitle = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 4rem;
`;

const ShoppingCart = () => {
  const { openCart } = useContext(CardsContext);

  return (
    <>
      {openCart === true ? (
        <Wrapper>
          <InfoWrapper>
            <CartTitle>Submit your order</CartTitle>
            <ShopCard isMin={true} price="23" name="Classic Mystery Box" />
          </InfoWrapper>
        </Wrapper>
      ) : null}
    </>
  );
};

export default ShoppingCart;
