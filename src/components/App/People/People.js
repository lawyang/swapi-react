import React, { Component } from 'react';

class People extends Component {
    render(){
        return(

            <li>
                {this.props.PeopleList}
            </li>       

        )
    }
}

export default People;