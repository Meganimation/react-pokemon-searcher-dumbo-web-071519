import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
   const allPokemon = this.props.pokemon.map((pokemon)=>{
      return <PokemonCard pokemonId={pokemon.id}pokemon={pokemon} />
    })
    return (
      <Card.Group itemsPerRow={6}>
        <h1>{allPokemon}}</h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
