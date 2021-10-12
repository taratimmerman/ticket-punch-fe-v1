import React from 'react';

import PropTypes from 'prop-types';
import { MdError } from 'react-icons/md';

const InlineErrorMessage = ({ pMessage }) => (
  <article>
    <div>
      <MdError />
    </div>
    <p>{pMessage}</p>
  </article>
);

InlineErrorMessage.propTypes = {
  pMessage: PropTypes.string,
};

export default InlineErrorMessage;
