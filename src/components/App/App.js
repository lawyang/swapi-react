import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import PlanetList from '../App/PlanetList/PlanetList';
import PeopleList from '../App/PeopleList/PeopleList';
import Home from '../Pages/Home/Home';
import PlanetPage from '../Pages/PlanetPage/PlanetPage';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      peopleList: []
    }
  }
  // Similar to jquery onReady
  // It is called by React when the componenet is loaded and ready to go!
  componentDidMount(){
    console.log('App component mounted');
    const nextUrl = 'https://swapi.co/api/planets/?format=json';
    const peopleUrl = 'https://swapi.co/api/people/?format=json'
    this.getPeople(peopleUrl);
  }

  getPeople(peopleUrl) {
    if (peopleUrl != null){
      axios.get(peopleUrl)
      .then((response) => {
        console.log(response.data);
        this.setState({ peopleList: [...this.state.peopleList, ...response.data.results] });
        peopleUrl = response.data.next;
        console.log('next URL is:', peopleUrl);
        this.getPeople(response.data.next)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }


  render() {
    console.log('GetPeople', this.state.peopleList);
    return (

      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="Swapi Planets">Always two there are, no more, no less. A master and an apprentice</h1>
        </header>
        <ul>
          <li> <Link to='/'> Home </Link> </li>
          <li> <Link to='/PlanetPage'> Planets </Link> </li>
        </ul>
        
          <Route exact path='/' component={Home} />
          <Route path='/PlanetPage' component={PlanetPage} />


        {/* <div class="taco">
        <PlanetList planetList = {this.state.planetList} />
        <PeopleList peopleList = {this.state.peopleList} />
        </div> */}
      </div>
      </Router>
    );
  }

}

export default App;
