import './Header2.css'
import pokedexIcon from '../assets/images/ball.png'
import React from 'react'

import { Link } from 'react-router-dom'

export default props => (
    <header className='header'>
        <div>
            <div className='title'>
                <img src={pokedexIcon} alt="" />
                <h1>PokeDev </h1>
                <img src={pokedexIcon} alt="" />
            </div>
        </div>
        <nav className='nav'>
            <div className='button-routers'>
                <li className='li'>
                    <Link className='link' to='/'>Início</Link>
                </li>
                <li className='li'>
                    <Link className='link' to='/Pokedex'>Pokemons</Link>
                </li>
            </div>
        </nav>
    </header>
)