import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link, Switch } from 'react-router-dom';
import Unicorns from './Unicorns';
import Sharks from './Sharks';
import Puppies from './Puppies';
import CreatureDetails from './CreatureDetails';
import unicornData from './unicorn-data';

export default class App extends Component {
  render() {


    return (
      <div className="App">
        <div className='header-section'>
          <header>
            <NavLink to='/unicorns' className='nav'> Unicorns </NavLink>
            <NavLink to='/puppies' className='nav'> Puppies </NavLink>
            <NavLink to='/sharks' className='nav'> Sharks </NavLink>
          </header>
        </div>

        {/* had to put 'exact' in route to avoid rendering both the unicorns and the detail data */}
          <Route exact path='/unicorns' component={Unicorns} />
          <Route path='/sharks' component={Sharks} />
          <Route path='/puppies' component={Puppies} />

          <Route path='/unicorns/:id' render={({ match }) => {
            const creature = unicornData.find(uni => uni.id === parseInt(match.params.id))
            if (creature) {
              return <CreatureDetails {...creature} />
            }
          }}/>
      </div>
    );
  }
}
