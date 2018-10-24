import React, { Component } from 'react';
import './FamousPerson.css';

class FamousPerson extends Component {

    state = { 
      person: {
        name: '',
        role: ''
      },
      array: []
    }

    handleChangeFor = (propertyName) => {
      return (event) => {
        this.setState( { 
          person: {
            ...this.state.person,
            [propertyName]: event.target.value
            }
          });
        }
      }


    submitPerson = () => {
        console.log(this.state.person);
        // state.array.push(this.state.person);
    }
      
  render() {
    return (
      <div>
        <input onChange={this.handleChangeFor('name')} placeholder="Name"/>
        <input onChange={this.handleChangeFor('role')} placeholder="Role"/>
        <button onClick={this.submitPerson}>Submit</button>

        <h3>{this.state.person.name} is famous for {this.state.person.role}</h3>

      </div>
      // <div>
      //   for (let person of peopleArray) {
      //     <h3>${array}</h3>
      //   }
      // </div>
    );
  }
}

export default FamousPerson;