import React from "react";
import PropTypes from 'prop-types';
import { Button } from './ButtonInput.styled'

const InputButton = ({ children, onClick }) => {
    return (

        <Button type="button" className="InputButton" onClick={onClick}>
            {children}
            ввод
        </Button>

    )
}





InputButton.defaultProps = {
    onClick: () => null,
    children: null,
};



InputButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default InputButton


