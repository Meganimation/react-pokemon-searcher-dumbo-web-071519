import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchedTerm: "",
    searchedPokemon: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({
      pokemon: data,
      searchedPokemon: data
    }))
  }

  updateSearch=(event)=>{
console.log(event.target.value)
return this.setState({
  searchedTerm: event.target.value},
  this.findPokemon)
  }
  
  findPokemon=()=>{
    const filterPokemon = this.state.pokemon.filter((pokemon)=>{
    return pokemon.name.includes(this.state.searchedTerm)})
    return this.setState({
      searchedPokemon: filterPokemon
    })}

    handleSubmit=(e, newPokemon) => {
      e.preventDefault()
      this.setState({
      pokemon: [...this.state.pokemon, newPokemon]}),
      console.log(newPokemon)
    }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.updateSearch} showNoResults={false} value={this.state.searchedTerm}/>
        <br />
        <PokemonCollection pokemon={this.state.searchedPokemon}/>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
