import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './IconButton.styled';

const IconButton = ({ children, onClick }) => {
    return (
    <Button type ="button" className="IconButton" onClick={onClick}>
        {children}
    </Button>)
}

IconButton.defaultProps = {
    onClick: () => null,
    children: null,
};

IconButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default IconButton
