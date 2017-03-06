import React from 'react';

const Title = ({currentNode}) => {
    if (!currentNode.title) {
        return null;
    }

    return <h1 className="title">{currentNode.title}</h1>
}

export default Title;