import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PlanetList from '../App/PlanetList/PlanetList';
import PeopleList from '../App/PeopleList/PeopleList';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      planetList: [],
      peopleList: []
    }
  }
  // Similar to jquery onReady
  // It is called by React when the componenet is loaded and ready to go!
  componentDidMount(){
    console.log('App component mounted');
    const nextUrl = 'https://swapi.co/api/planets/?format=json';
    const peopleUrl = 'https://swapi.co/api/people/?format=json'
    this.getMorePlanets(nextUrl);
    this.getPeople(peopleUrl);
  }

  getMorePlanets(nextUrl) {
    if (nextUrl != null){
      axios.get(nextUrl)
      .then((response) => {
        console.log(response.data);
        this.setState({ planetList: [...this.state.planetList, ...response.data.results] });
        nextUrl = response.data.next;
        console.log('next URL is:', nextUrl);
        this.getMorePlanets(response.data.next)
      })
      .catch((error) => {
        console.log(error);
      })
    }
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
    console.log('PlanetList:', this.state.planetList);
    console.log('GetPeople', this.state.peopleList);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Swapi Planets">Welcome to React</h1>
        </header>
        <div class="taco">
        <PlanetList planetList = {this.state.planetList} />
        <PeopleList peopleList = {this.state.peopleList} />
        </div>
      </div>
    );
  }

}

export default App;
