import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Pokedex from '../content/Pokedex'
import Home from '../content/Home'
import NotFound from '../content/NotFound'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/Pokedex" element={<Pokedex />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    </main>
)

export default Content