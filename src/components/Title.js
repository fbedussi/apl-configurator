import React from 'react';

const Title = ({text}) => {
    if (!text) {
        return null;
    }

    return <h1 className="title">{text}</h1>;
};

export default Title;
