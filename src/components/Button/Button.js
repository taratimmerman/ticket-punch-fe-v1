import React from 'react';

import PropTypes from 'prop-types';
import './Button.css';
import styled from 'styled-components';

const Button = props => {
    return (
        <button className={`pushable ${props.className}`} onClick={props.onClick}>
            <span className="shadow"></span>
            <span className={`edge ${props.className}`}></span>
            <span className={`front ${props.className}`}>
                <ButtonInfoWrapper>
                    {props.oAuth ?
                        <OauthLogo className={`${props.className}`} alt={props.alt} src={props.logo} /> : null
                    }{props.text}
                </ButtonInfoWrapper>
            </span>

        </button >
    );
};

Button.propTypes = {
    text: PropTypes.any,
    onClick: PropTypes.func,
    className: PropTypes.string,
    oAuth: PropTypes.bool,
    logo: PropTypes.string,
    alt: PropTypes.string
};

export default Button;

// STYLED COMPONENTS:

const ButtonInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const OauthLogo = styled.img`
    width: 1rem;
    height: 1rem;
    margin-right: 8px;
`;