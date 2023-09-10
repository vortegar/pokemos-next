import type { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonsListResponse, smallPokemons } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: smallPokemons[];
}


const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokémons'>

      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map((pokemon) => 
            <PokemonCard  key={pokemon.id} pokemon={pokemon}/>
          )
        }
      </Grid.Container>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonsListResponse>(`/pokemon?limit=151`);

  const pokemons : smallPokemons[] = data.results.map((poke, indexPoke) =>{
  
    return{
      id  : indexPoke + 1,
      name: poke.name,
      url : poke.url,
      img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${indexPoke + 1}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default Home
