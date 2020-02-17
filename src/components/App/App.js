import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from '../Home/Home';
import store from '../../redux/store';
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

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <HeroImage />
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={AllGames}></Route>
          <Route exact path='/game/:id' component={ GameDetails }></Route>

          <Route exact path='/allCreators' component={ AllCreators }></Route>
          <Route exact path='/creator/:id' component={ CreatorDetails }></Route>

          <Route exact path='/allTags' component={ AllTags }></Route>
          <Route exact path='/tag/:id' component={ TagDetails }></Route>

          <Route exact path='/allStores' component={ AllStores }></Route>
        </Switch>
      </Router>
    </Provider>
    </>
    );
  }
}

export default App;