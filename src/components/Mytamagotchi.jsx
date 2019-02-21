import React from 'react';
import PropTypes from 'prop-types';


function Mytamagotchi(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <img src={props.image} />
            <p>Sleep: {props.sleep}</p>
            <p>Happy: {props.happy}</p>
            <p>Feed Me: {props.feed}</p>
            <p>Bath time: {props.hygene}</p>
            <p>Play time: {props.play}</p>
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
