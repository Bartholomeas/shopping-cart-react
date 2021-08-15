import React, { useState, useContext } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Wrapper, BottomWrapper, QuantityInput, ItemName, PriceTag, ItemLink, CardImage } from './ShopCard.styles';
import { CardsContext } from '../../../providers/AppProvider';

const ShopCard = ({ isMin = false, id, name, price, color = '#fff' }) => {
  const [quantity, setQuantity] = useState('1');
  const { chosenCards, setChosenCards } = useContext(CardsContext);

  const setQuantityNumber = (e) => {
    setQuantity(e.target.value);
  };

  const showCard = () => {
    const card = { id, name, price, color, quantity };
    setChosenCards([...chosenCards, card]);
  };
  return (
    <Wrapper isMin={isMin}>
      <ItemLink to={`/shopping/:${id}`}>
        <ItemName>{name}</ItemName>
        <CardImage style={{ color: color }}>?</CardImage>
      </ItemLink>
      <BottomWrapper>
        <PriceTag>${price}</PriceTag>
        {isMin ? null : <Button onClick={() => showCard()}>Add to cart</Button>}
        <QuantityInput onChange={(e) => setQuantityNumber(e)} type="number"></QuantityInput>
      </BottomWrapper>
    </Wrapper>
  );
};
export default ShopCard;
