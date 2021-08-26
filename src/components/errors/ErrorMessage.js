import React from 'react';

import PropTypes from 'prop-types';
import { MdError } from 'react-icons/md';
import styled from 'styled-components';

const ErrorMessage = ({ error }) => {
    if (!error) {
        return null;
    }
    return (
        <ErrorContainer>
            <ErrorIcon>
                <MdError />
            </ErrorIcon>
            <ErrorText>{ error }</ErrorText>
        </ErrorContainer>
    );
};

ErrorMessage.propTypes = {
    error: PropTypes.any
};

export default ErrorMessage;

// STYLED COMPONENTS

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(226, 68, 92, .6);
    color: #E8EAED;
    padding: 4px;
    margin: 4px;
    border-radius: 4px;
`;

const ErrorIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 4px;
`;

const ErrorText = styled.p`
    font-size: 1rem;
    margin: 4px;
`;