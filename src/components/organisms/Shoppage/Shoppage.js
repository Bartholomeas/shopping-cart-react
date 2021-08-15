import React, { useContext } from 'react';
import { Wrapper, CardsWrapper } from './Shoppage.styles';
import ShopCard from '../../molecules/ShopCard/ShopCard';
import { CardsContext } from '../../../providers/AppProvider';

const Shoppage = () => {
  const { cards } = useContext(CardsContext);
  return (
    <Wrapper>
      <CardsWrapper>
        {cards.map(({ id, name, price, color, quantity }) => {
          return <ShopCard id={id} key={id} name={name} price={price} color={color} quantity={quantity} />;
        })}
      </CardsWrapper>
    </Wrapper>
  );
};
export default Shoppage;
