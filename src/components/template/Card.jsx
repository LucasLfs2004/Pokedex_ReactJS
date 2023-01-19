import './Card.css';
import React from 'react';

export default ({ name, front_image, types }) => {
    const typeHandler = () => {
        console.log('types');
        console.log(types);
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    }

    return (
        <div className="card">
                <img src={front_image} alt="Pokemon" />
                <div className='text'>
                    <span className="name-pokemon">{name}</span>
                    <span className='abilities'>{typeHandler()}</span>
                </div>
        </div>
    )
}
