import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import Unicorns from './Unicorns';
import Sharks from './Sharks';
import Home from './Home';
import Puppies from './Puppies';
import CreatureDetails from './CreatureDetails';
import unicornData from './data/unicorn-data';
import puppyData from './data/puppy-data';
import sharkData from './data/shark-data';

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

        <Route exact path='/' component={Home} />
        <Route exact path='/unicorns' component={Unicorns} />
        <Route exact path='/sharks' component={Sharks} />
        <Route exact path='/puppies' component={Puppies} />

        <Route path='/unicorns/:id' render={({ match }) => {
          const creature = unicornData.find(uni => uni.id === parseInt(match.params.id))

          if (creature) {
            return <CreatureDetails {...creature} />
          }
        }} />

        <Route path={`/puppies/:id`} render={props => {
          const { id } = props.match.params
          const creature = puppyData.find(uni => uni.id === parseInt(id))
          if (creature) {
            return <CreatureDetails {...creature} />
          }
        }} />

        <Route path={`/sharks/:id`} render={({ match }) => {
          const { id } = match.params

          const creature = sharkData.find(uni => uni.id === parseInt(id))
          if (creature) {
            return <CreatureDetails {...creature} />
          }
        }} />
      </div>
    );
  }
}
