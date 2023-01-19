import './Pokedex.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../template/Card'
import lupa from '../../components/assets/images/lupa.png'

export const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    }, []
    );

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 400; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((response) => setPokemons(response))
            .catch((e) => console.log('error: ', e));
    }

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if (name === "") {
            getPokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    };

    return (
        <div className='pokedex'>
            <div className="search">
                <img className='search-icon' src={lupa} alt="Pesquisar" />
                <input className='search-input' type="text" placeholder={`Pesquisar`} onChange={(e) => pokemonFilter(e.target.value)} />
            </div>
            <div className='cards'>
                {pokemons.map((pokemon, key) => (
                    <Card key={key}
                        front_image={pokemon.data.sprites.front_default}
                        back_image={pokemon.data.sprites.back_default}
                        name={pokemon.data.name}
                        types={pokemon.data.types} />
                ))
                }
            </div>
        </div>

    )
}


export default Pokedex