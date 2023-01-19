import './NotFound.css';
import React from 'react';
import Charizard from '../assets/images/Charizard.png';

export default props => (
    <div className='notFound'>
        <h1>
            Opss... A página que você procura não foi encontrada, por favor volte ao início
        </h1>
        <img src={Charizard} alt="" />
    </div>
)