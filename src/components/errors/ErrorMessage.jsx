import React from 'react';

import PropTypes from 'prop-types';
import { MdError } from 'react-icons/md';

const ErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }
  return (
    <article>
      <div>
        <MdError />
      </div>
      <p>{ error }</p>
    </article>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
