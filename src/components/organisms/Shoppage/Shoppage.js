import React from 'react';
import { Wrapper, CardsWrapper } from './Shoppage.styles';
import ShopCard from '../../molecules/ShopCard/ShopCard';

const Shoppage = () => {
  return (
    <Wrapper>
      <CardsWrapper>
        <ShopCard></ShopCard>
      </CardsWrapper>
    </Wrapper>
  );
};
export default Shoppage;
