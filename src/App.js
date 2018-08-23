import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Home from './Home'
import CreatureDetails from './CreatureDetails'
import Creatures from './Creatures'
import unicornData from './data/unicorn-data'
import puppyData from './data/puppy-data'
import sharkData from './data/shark-data'
import dolphinData from './data/dolphin-data'
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='header-section'>
          <header>
            <NavLink to='/unicorns' className='nav'>Unicorns</NavLink>
            <NavLink to='/puppies' className='nav'>Puppies</NavLink>
            <NavLink to='/sharks' className='nav'>Sharks</NavLink>
            <NavLink to='/dolphins' className='nav'>Dolphins</NavLink>
          </header>
        </div>
        <Route exact path='/' component={Home} />
        <Route exact path='/unicorns' render={() => {
          return <Creatures creatureData={unicornData} type="Unicorns"/>
        }}/>
        <Route exact path='/puppies' render={() => {
          return <Creatures creatureData={puppyData} type="Puppies"/>
        }}/>
        <Route exact path='/sharks' render={() => {
          return <Creatures creatureData={sharkData} type="Sharks"/>
        }}/>
        <Route exact path='/dolphins' render={() => {
          return <Creatures creatureData={dolphinData} type="Dolphins"/>
        }}/>
        <Route path='/unicorns/:id' render={({match}) => {
          const { id } = match.params
          const foundUnicorn = unicornData.find(uni => uni.id === parseInt(id))
          return <CreatureDetails {...foundUnicorn} />
        }}/>
        <Route path='/puppies/:id' render={({match}) => {
          const { id } = match.params
          const foundPuppy = puppyData.find(puppy => puppy.id === parseInt(id))
          return <CreatureDetails {...foundPuppy} />
        }}/>
        <Route path='/sharks/:id' render={({match}) => {
          const { id } = match.params
          const foundShark = sharkData.find(shark => shark.id === parseInt(id))
          return <CreatureDetails {...foundShark} />
        }}/>
        <Route path='/dolphins/:id' render={({match}) => {
          const { id } = match.params
          const foundDolphin = dolphinData.find(d => d.id === parseInt(id))
          return <CreatureDetails {...foundDolphin} />
        }}/>
      </div>
    );
  }
}
