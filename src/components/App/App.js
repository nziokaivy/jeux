import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from '../Home/Home';
import store from '../../redux/store';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Header from '../elements/Header/Header';
import HeroImage from '../elements/HeroImage/HeroImage';
import AllGames from '../AllGames/AllGames';

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
        </Switch>
      </Router>
    </Provider>
    </>
    );
  }
}

export default App;