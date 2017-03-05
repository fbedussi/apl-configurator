import React from 'react';

const Title = ({currentNode}) => {
    if (!currentNode.title) {
        return null;
    }

    return <h1>{currentNode.title}</h1>
}

export default Title;