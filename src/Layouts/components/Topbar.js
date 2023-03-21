import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Stack,
  styled,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const StyledTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(3),
  color: theme.palette.white,
  fontWeight: 700,
  textTransform: 'uppercase'
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // opacity: 0.5,
  color: theme.palette.common.white
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.white.main,
  borderRadius: 20,
  elevation: 0,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.white.main,
    color: theme.palette.primary.main
  }
}));

const StyledDiv = styled('div')({
  flexGrow: 1
});

const Topbar = (props) => {
  const { ...rest } = props;
  const theme = useTheme();

  return (
    <StyledAppBar {...rest} elevation={1}>
      <Toolbar>
        <StyledTitle variant="h3">Araemis Inc.</StyledTitle>
        <StyledDiv />
        <Hidden lgDown>
          <StyledButton variant="contained" color="primary">
            Contact Us
          </StyledButton>
        </Hidden>
        <Stack direction="row">
          <IconButton sx={{ marginLeft: theme.spacing(1) }} color="inherit">
            <Twitter />
          </IconButton>
          <IconButton sx={{ marginLeft: theme.spacing(1) }} color="inherit">
            <Facebook />
          </IconButton>
          <IconButton sx={{ marginLeft: theme.spacing(1) }} color="inherit">
            <Instagram />
          </IconButton>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
