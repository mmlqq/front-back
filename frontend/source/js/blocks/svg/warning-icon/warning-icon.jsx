import React from 'react';
import PropTypes from 'prop-types';

export default function WarningIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  );
}

WarningIcon.propTypes = {
  className: PropTypes.string,
};

WarningIcon.defaultProps = {
  className: null,
};
