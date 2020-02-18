import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import axios from 'axios';
import dotenv from 'dotenv';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Header from '../elements/Header/Header';
import HeroImage from '../elements/HeroImage/HeroImage';
import AllGames from '../AllGames/AllGames';
import GameDetails from '../GameDetails/GameDetails';
import AllCreators from '../AllCreators/AllCreators';
import CreatorDetails from '../CreatorDetails/CreatorDetails';
import AllTags from '../AllTags/AllTags';
import TagDetails from '../TagDetails/TagDetails';
import AllStores from '../AllStores/AllStores';
import StoreDetails from '../StoreDetails/StoreDetails';

dotenv.config();

axios.defaults.BASE_URL = process.env.BASE_URL;

const App = () => {
    return (
      <>
      
    <Provider store={store}>
      <Router>
      <Header />
      <HeroImage />
        <Switch>
          <Route exact path='/' component={AllGames}></Route>
          <Route exact path='/game/:id' component={ GameDetails }></Route>

          <Route exact path='/all-creators' component={ AllCreators }></Route>
          <Route exact path='/creator/:id' component={ CreatorDetails }></Route>

          <Route exact path='/all-tags' component={ AllTags }></Route>
          <Route exact path='/tag/:id' component={ TagDetails }></Route>

          <Route exact path='/all-stores' component={ AllStores }></Route>
          <Route exact path='/store/:id' component={ StoreDetails }></Route>
        </Switch>
      </Router>
    </Provider>
    </>
    );
  }

export default App;
