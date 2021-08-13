import React from 'react';
import { GlobalStyle } from '../assets/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Homepage from '../components/organisms/Homepage/Homepage';
import Navbar from '../components/organisms/Navbar/Navbar';
import Shoppage from '../components/organisms/Shoppage/Shoppage';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/shopping">
            <Shoppage />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;