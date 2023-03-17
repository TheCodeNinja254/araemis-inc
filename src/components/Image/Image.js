import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt = 'Image', ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired
};

export default Image;
