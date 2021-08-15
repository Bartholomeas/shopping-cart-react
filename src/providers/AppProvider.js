import React, { useState } from 'react';
import { cards } from '../data/cards';

export const CardsContext = React.createContext({
  cards,
  getCard: () => {},
  openCart: 'false',
});

const AppProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [chosenCards, setChosenCards] = useState([]);

  return <CardsContext.Provider value={{ cards, openCart, setOpenCart, chosenCards, setChosenCards }}>{children}</CardsContext.Provider>;
};

export default AppProvider;
