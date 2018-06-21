import React, { Component } from 'react';


class PeopleList extends Component {
    render(){
        return(
            
            <div className="grid-item">
                <ul> {this.props.peopleList.map( people => <li key={people.name}> {people.name} </li>)} </ul>
            </div>
            
        )
    }
}

export default PeopleList;