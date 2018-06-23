import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Home from '../Pages/Home/Home';
import PlanetPage from '../Pages/PlanetPage/PlanetPage';
import PeoplePage from '../Pages/PeoplePage/PeoplePage';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  // Similar to jquery onReady
  // It is called by React when the componenet is loaded and ready to go!
  render() {
    console.log('GetPeople', this.state.peopleList);
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="Swapi Planets">Always two there are, no more, no less. A master and an apprentice</h1>
        </header>
        <ul class="navbar">
          <li> <Link to='/'> <h1>Home</h1> </Link> </li>
          <li> <Link to='/PlanetPage'> <h2> Planets </h2></Link> </li>
          <li> <Link to='/PeoplePage'> <h2> People </h2> </Link> </li>
        </ul>
          <Route exact path='/' component={Home} />
          <Route path='/PlanetPage' component={PlanetPage} />
          <Route path='/PeoplePage' component={PeoplePage} />
      </div>
      </Router>
    );
  }

}

export default App;
