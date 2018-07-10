import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link } from 'react-router-dom';
import Home from './Home'
import Unicorns from './Unicorns'
import Puppies from './Puppies'
import Sharks from './Sharks'
import CreatureDetails from './CreatureDetails'
import unicornData from './data/unicorn-data'
import sharkData from './data/shark-data'
import puppyData from './data/puppy-data'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-section">
          <header>
            <NavLink exact to="/unicorns" className="nav">Unicorns</NavLink>
            <NavLink to="/puppies" className="nav">Puppies</NavLink>
            <NavLink to="/sharks" className="nav">Sharks</NavLink>
          </header>
        </div>
        <Route exact path='/' component={Home} />
        <Route exact path='/unicorns' component={Unicorns} />
        <Route exact path='/puppies' component={Puppies} />
        <Route exact path='/sharks' component={Sharks} />

        <Route path='/unicorns/:id' render={({match}) => {
          const unicorn = unicornData.find(uni => uni.id === parseInt(match.params.id))

          return(
            <CreatureDetails {...unicorn} />
          )
        }}/>

        <Route path='/sharks/:id' render={({match}) => {
          const shark = sharkData.find(shark => shark.id === parseInt(match.params.id))

          return(
            <CreatureDetails {...shark} />
          )
        }}/>

        <Route path='/puppies/:id' render={({match}) => {
          const puppy = puppyData.find(puppy => puppy.id === parseInt(match.params.id))

          return(
            <CreatureDetails {...puppy} />
          )
        }}/>
      </div>
    );
  }
}
