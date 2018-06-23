import React, { Component } from 'react';
import axios from 'axios';

class PeoplePage extends Component {

    constructor(props){
        super(props);
        this.state={
            peopleList: []
        }
    }

    componentDidMount(){
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

    render(){
        console.log(this.state.peopleList);
        return(
            <div className="grid-item">
                <ul> {this.state.peopleList.map( people =>
                <li> {people.name} </li>)}
                </ul>
            </div>
        )
    }

}

export default PeoplePage;