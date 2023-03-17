import React from 'react';
import PropTypes from 'prop-types';
import { Link, Typography, useTheme } from '@mui/material';

const Footer = (props) => {
  const { className, ...rest } = props;
  const theme = useTheme();

  return (
    <div
      {...rest}
      style={{ padding: theme.spacing(4), marginTop: theme.spacing(5) }}>
      <Typography variant="body1" sx={{ color: theme.palette.primary.lighter }}>
        &copy;{' '}
        <Link
          sx={{ color: theme.palette.primary.lighter }}
          component="a"
          href="https://araemisconsulting.com"
          target="_blank">
          Araemis Inc
        </Link>
        . {new Date().getFullYear()}
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
