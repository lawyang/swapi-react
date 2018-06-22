import React, { Component } from 'react';


// const Planet = () => (
//     <div>
//         <h1>Planet</h1>
//         <p></p>
//     </div>
// );


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