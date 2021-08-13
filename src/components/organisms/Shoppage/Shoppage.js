import React from 'react';
import { Wrapper, CardsWrapper } from './Shoppage.styles';
import ShopCard from '../../molecules/ShopCard/ShopCard';
import { cards } from '../../../data/cards';

const Shoppage = () => {
  return (
    <Wrapper>
      <CardsWrapper>
        {cards.map(({ name, price, color }, idx) => {
          return <ShopCard name={name} price={price} color={color} />;
        })}
      </CardsWrapper>
    </Wrapper>
  );
};
export default Shoppage;
