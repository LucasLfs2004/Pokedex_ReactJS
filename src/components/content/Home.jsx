import './Home.css';
import React from 'react';
import PokemonInicial from '../assets/images/pikachuInicial.png';

export default props => {
    return (
        <div className='home'>
            <div>
                <img src={PokemonInicial} alt="Pikachu" />

            </div>
            <div className='apresentation'>
                <div className="text-apresentation">
                    <span>Bem vindo, esse é um projeto de desenvolvimento em React. </span> <br />
                    <span>Para ver a listagem dos Pokemons, clique no botão no canto superior direito da página.</span>
                </div>
                <div className='text-home'>
                    <h1 className='title-apresentation'>Funcionalidades implementadas</h1>
                    <ul>
                        <li>
                            Lista dos principais pokemons;
                        </li>
                        <li>
                            Filtragem por pesquisa para os Pokemons;
                        </li>
                        <li>
                            Principais características e habilidades dos Pokemons ao serem selecionados;
                        </li>
                        <li>
                            Principais características e habilidades dos Pokemons ao serem selecionados;
                        </li>
                        <li>
                            Diferentes ângulos dos Pokemons ao serem selecionados.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}