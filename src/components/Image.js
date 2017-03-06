import React from 'react';

const Image = ({ imgName }) => {
    if (!(imgName && imgName.length) ) {
        return null;
    }

    return <img className="image" src={`images/${imgName}`}/>
}

export default Image;