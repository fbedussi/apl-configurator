import React from 'react';

const Images = ({ sources }) => {
    if (!(sources && sources.length) ) {
        return null;
    }

    return <div class="imagesContainer">
            sources.map(src => <img className="image" src={`images/${src}`}/>)
        </div>
}

export default Images;