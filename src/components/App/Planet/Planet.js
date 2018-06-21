import React, { Component } from 'react';

class Planet extends Component {
    render(){
        return(

            <li>
                {this.props.PlanetList}
            </li>       

        )
    }
}

export default Planet;