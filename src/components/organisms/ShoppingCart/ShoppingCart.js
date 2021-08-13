import React from 'react';
import styled from 'styled-components';
import ShopCard from '../../molecules/ShopCard/ShopCard';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  width: 30rem;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.bgShadeColor};
`;

const ShoppingCart = () => {
  return (
    <Wrapper>
      <p>Submit your order</p>
      <ShopCard isMin />
    </Wrapper>
  );
};

export default ShoppingCart;
