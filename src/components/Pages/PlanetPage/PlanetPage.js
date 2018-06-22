import React, { Component } from 'react';
import axios from 'axios';


class PlanetPage extends Component {

    constructor(props){
        super(props);
        this.state = {
          planetList: [],
        }
      }
    
    componentDidMount(){
        console.log('App component mounted');
        const nextUrl = 'https://swapi.co/api/planets/?format=json';
        this.getMorePlanets(nextUrl);
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

    render(){
        console.log(this.state.planetList)
        return(
            <div className="grid-item">
                <ul> {this.state.planetList.map( planet => 
                    <li key={planet.name}>{planet.name}</li>)} 
                </ul>
            </div>   
        )
    }
}

export default PlanetPage;



