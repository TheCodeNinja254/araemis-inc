import React from 'react';
import { Grid, TextField, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

const ContactUsForm = ({
  customerName,
  businessName,
  mailSubject,
  message,
  setCustomerName,
  setBusinessName,
  setMailSubject,
  setMessage
}) => {
  const theme = useTheme();

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          value={customerName}
          label={
            <Typography color={theme.palette.text.primary}>
              Your Name
            </Typography>
          }
          sx={{ marginTop: theme.spacing(2) }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          value={businessName}
          label={
            <Typography color={theme.palette.text.primary}>
              Your Business Name
            </Typography>
          }
          sx={{ marginTop: theme.spacing(2) }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          name={mailSubject}
          onChange={(e) => setMailSubject(e.target.value)}
          value={mailSubject}
          label={
            <Typography color={theme.palette.text.primary}>Subject</Typography>
          }
          sx={{ marginTop: theme.spacing(2) }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          name={message}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          multiline
          rows={4}
          label={
            <Typography color={theme.palette.text.primary}>
              Your message
            </Typography>
          }
          sx={{ marginTop: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
};

ContactUsForm.defaultProps = {
  customerName: '',
  businessName: '',
  mailSubject: '',
  message: ''
};

ContactUsForm.propType = {
  customerName: PropTypes.string,
  businessName: PropTypes.string,
  mailSubject: PropTypes.string,
  message: PropTypes.string,
  setCustomerName: PropTypes.func.isRequired,
  setBusinessName: PropTypes.func.isRequired,
  setMailSubject: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired
};

export default ContactUsForm;
