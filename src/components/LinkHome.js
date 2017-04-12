import React from 'react';

const LinkHome = ({text, url}) => {
    return <a className="linkHome" href={url}>{text}</a>;
};

export default LinkHome;
