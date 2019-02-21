import React from 'react';
import Mytamagotchi from './Mytamagotchi';
import PropTypes from 'prop-types';


function TamogotchiList(props) {
    return (
        <div>
            {props.tamagotchiList.map((tamagotchi, index) =>
                <Mytamagotchi name={tamagotchi.name}
                    image={tamagotchi.image}
                    sleep={tamagotchi.sleep}
                    happy={tamagotchi.happy}
                    hygene={tamagotchi.hygene}
                    play={tamagotchi.play}
                    feed={tamagotchi.feed}
                    key={tamagotchi.id} />
            )}
        </div>
    );
}

TamogotchiList.propTypes = {
    tamagotchiList: PropTypes.array
};

export default TamogotchiList;