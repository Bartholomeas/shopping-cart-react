import React, { useState } from 'react';
import { cards } from '../data/cards';

export const CardsContext = React.createContext({
  cards,
  getCard: () => {},
  openCart: 'false',
});

const getCard = (e) => {
  const fullElement = e.target.parentElement.parentElement;
  console.log(e);
};

const AppProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [chosenCard, setChosenCart] = useState({ id: '', name: '', price: '', color: '' });
  console.log(openCart);

  return <CardsContext.Provider value={{ cards, getCard, openCart, setOpenCart }}>{children}</CardsContext.Provider>;
};

export default AppProvider;
