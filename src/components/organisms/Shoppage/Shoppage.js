import React, { useContext } from 'react';
import { Wrapper, CardsWrapper } from './Shoppage.styles';
import ShopCard from '../../molecules/ShopCard/ShopCard';
import { CardsContext } from '../../../providers/AppProvider';

const Shoppage = () => {
  const { getCard, cards } = useContext(CardsContext);

  return (
    <Wrapper>
      <CardsWrapper>
        {cards.map((card, { id, name, price, color }) => {
          console.log(card);
          return <ShopCard card={card} id={id} key={id} name={name} price={price} color={color} />;
        })}
      </CardsWrapper>
    </Wrapper>
  );
};
export default Shoppage;
