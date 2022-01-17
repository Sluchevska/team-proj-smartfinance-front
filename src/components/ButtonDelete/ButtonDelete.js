import React from "react";
import PropTypes from 'prop-types';
import { Button } from './ButtonDelete.styled'

const DeleteButton = ({ children, onClick }) => {
    return (

        <Button type="button" className="DeleteButton" onClick={onClick}>
            {children}
            очистить
        </Button>

    )
}





DeleteButton.defaultProps = {
    onClick: () => null,
    children: null,
};



DeleteButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default DeleteButton