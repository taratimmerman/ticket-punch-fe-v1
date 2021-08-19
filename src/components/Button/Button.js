import React from 'react';

import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
    return (
        <button className="pushable" onClick={props.onClick}>
            <span className="shadow"></span>
            <span className={`edge ${props.className}`}></span>
            <span className={`front ${props.className}`}>{props.text}</span>
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default Button;