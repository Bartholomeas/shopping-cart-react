import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardsContext } from '../../../providers/AppProvider';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 3rem;
  top: 3rem;
  height: 3rem;
  background: none;
  background-color: transparent;
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.fontColor};
  text-decoration: none;
  padding: 1rem 2rem;
  font-weight: bold;
`;

const Svg = styled.svg`
  height: 2rem;
  fill: ${({ theme }) => theme.colors.fontColor};
`;

const CartButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
`;

const QuantityNum = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.8rem;
  width: 1.8rem;
  right: -1rem;
  top: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondColor};
  font-weight: bold;
`;

const Navbar = () => {
  const { openCart, setOpenCart, chosenCards } = useContext(CardsContext);

  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/shopping">Shop</StyledLink>
      <CartButton onClick={() => setOpenCart(!openCart)}>
        <Svg viewBox="0 -31 512.00033 512" xmlns="http://www.w3.org/2000/svg">
          <path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0" />
          <path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0" />
          <path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0" />
        </Svg>
        <QuantityNum>{chosenCards.length}</QuantityNum>
      </CartButton>
    </Wrapper>
  );
};
export default Navbar;
