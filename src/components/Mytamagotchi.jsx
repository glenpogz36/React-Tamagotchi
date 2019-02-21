import React from 'react';
import PropTypes from 'prop-types';
import Play from './Play';
import Sleep from './Sleep';
import Eat from './Eat';

function Mytamagotchi(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <img src={props.image} />
            <Play />
            <Eat />
            <Sleep />
            <hr />
        </div>
    )
}

Mytamagotchi.propTypes = {
    name: PropTypes.string,
    sleep: PropTypes.number,
    play: PropTypes.number,
    happy: PropTypes.number,
    feed: PropTypes.number,
    hygene: PropTypes.number
}

export default Mytamagotchi;
