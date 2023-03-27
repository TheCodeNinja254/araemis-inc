import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useContext, useState } from 'react';
import { Link, Typography, useTheme } from '@mui/material';
import { Mail } from '@mui/icons-material';
import ContactUsModalContext from '../../context/ContactUsModalContext';
import ContactUsForm from '../ContactUsForm/ContactUsForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactUsDialog = () => {
  const theme = useTheme();
  const { showModal, toggleModal } = useContext(ContactUsModalContext);
  const handleClose = () => {
    toggleModal();
  };

  const [customerName, setCustomerName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [mailSubject, setMailSubject] = useState('');
  const [message, setMessage] = useState('');

  const buttonState = () => {
    return !customerName || !businessName || !mailSubject || !message;
  };

  return (
    <Dialog
      open={showModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description">
      <DialogTitle>
        <Typography sx={{ fontWeight: 700 }}>
          Talk to us! Let us know how we can help you and your business
        </Typography>
      </DialogTitle>
      <DialogContent>
        <ContactUsForm
          customerName={customerName}
          businessName={businessName}
          mailSubject={mailSubject}
          message={message}
          setCustomerName={setCustomerName}
          setBusinessName={setBusinessName}
          setMailSubject={setMailSubject}
          setMessage={setMessage}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          sx={{ borderRadius: 10 }}
          disableElevation
          onClick={handleClose}>
          Cancel
        </Button>
        <Button
          component={Link}
          href={`mailto:info@araemisconsulting.com?subject=${mailSubject}&body=Full Name:-${customerName}-BusinessName:${businessName}-message-${message}`}
          variant="contained"
          sx={{ borderRadius: 10, marginLeft: theme.spacing(1) }}
          disabled={buttonState()}
          disableElevation>
          <Mail /> &nbsp; Contact Us
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactUsDialog;
