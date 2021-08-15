import React, { useContext } from 'react';
import styled from 'styled-components';
import ShopCard from '../../molecules/ShopCard/ShopCard';
import { CardsContext } from '../../../providers/AppProvider';
import { Button } from '../../atoms/Button/Button';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 25rem;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.bgShadeColor};
  overflow-y: scroll;
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

const FullPrice = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.fontColor};
`;

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  margin-bottom: 2rem;
`;

const ShoppingCart = () => {
  const { openCart, chosenCards } = useContext(CardsContext);
  console.log(chosenCards);

  return (
    <>
      {openCart === true ? (
        <Wrapper>
          <InfoWrapper>
            <CheckoutWrapper>
              <CartTitle>Submit your order</CartTitle>
              <FullPrice>
                {chosenCards.length > 0 ? chosenCards.reduce((total, item) => total + parseInt(item.price * item.quantity), 0) : null}$
              </FullPrice>
              <Button>Checkout</Button>
            </CheckoutWrapper>
            {chosenCards.map(({ isMin = false, id, name, color, price, quantity }, idx) => {
              return <ShopCard key={`${id}-${idx}`} isMin={true} id={id} name={name} price={price} color={color} itemQuantity={quantity} />;
            })}
          </InfoWrapper>
        </Wrapper>
      ) : null}
    </>
  );
};

export default ShoppingCart;
