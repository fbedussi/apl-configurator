import React from 'react';

const Images = ({ sources }) => {
    if (!(sources && sources.length) ) {
        return null;
    }

    return <div className="imagesContainer">
            {sources.map((src, i) => <img key={i} className="image" src={`images/${src}`}/>)}
        </div>
}

export default Images;