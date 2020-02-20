import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import axios from 'axios';
import dotenv from 'dotenv';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Header from '../elements/Header/Header';
import HeroImage from '../elements/HeroImage/HeroImage';
import AllGames from '../games/AllGames';
import GameDetails from '../games/GameDetails';
import AllCreators from '../creators/AllCreators';
import CreatorDetails from '../creators/CreatorDetails';
import AllTags from '../tags/AllTags';
import TagDetails from '../tags/TagDetails';
import AllStores from '../stores/AllStores';
import StoreDetails from '../stores/StoreDetails';
import NotFound from '../elements/NotFound';

dotenv.config();

axios.defaults.BASE_URL = process.env.BASE_URL;

const App = () => {
    return (
      <>
      
    <Provider store={store}>
      <Router>
        <Switch>
        
          <Route exact path='/' component={AllGames}></Route>
          <Route exact path='/game/:id' component={ GameDetails }></Route>

          <Route exact path='/all-creators' component={ AllCreators }></Route>
          <Route exact path='/creator/:id' component={ CreatorDetails }></Route>

          <Route exact path='/all-tags' component={ AllTags }></Route>
          <Route exact path='/tag/:id' component={ TagDetails }></Route>

          <Route exact path='/all-stores' component={ AllStores }></Route>
          <Route exact path='/store/:id' component={ StoreDetails }></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
    </>
    );
  }

export default App;
