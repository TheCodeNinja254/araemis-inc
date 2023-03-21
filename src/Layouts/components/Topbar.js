import React, { useEffect, useState } from 'react';
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
  useScrollTrigger,
  useTheme
} from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const StyledTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(3),
  color: theme.palette.common.white,
  fontWeight: 300,
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(1)
  }
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: theme.palette.common.white
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.common.white,
  borderRadius: 20,
  elevation: 0,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main
  }
}));

const StyledDiv = styled('div')({
  flexGrow: 1
});

const Topbar = (props) => {
  const { ...rest } = props;
  const theme = useTheme();

  const [backgroundColor, setBackgroundColor] = useState(
    theme.palette.primary.dark
  );

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  useEffect(() => {
    setBackgroundColor(
      trigger ? theme.palette.primary.main : theme.palette.primary.dark
    );
  }, [trigger, theme.palette.primary.dark, theme.palette.primary.main]);

  return (
    <>
      {trigger && (
        <StyledAppBar {...rest} elevation={1} style={{ backgroundColor }}>
          <Toolbar>
            <div>
              <StyledTitle variant="h5">Araemis</StyledTitle>
              <StyledTitle variant="body2">Consulting.</StyledTitle>
            </div>
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
      )}
    </>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
