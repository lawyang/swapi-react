import React, { Component } from 'react';


class PlanetList extends Component {
    render(){
        return(
            
            <div className="grid-item">
                <ul> {this.props.planetList.map( planet => <li key={planet.name}>{planet.name}</li>)} </ul>
            </div>
        )
    }
}

export default PlanetList;