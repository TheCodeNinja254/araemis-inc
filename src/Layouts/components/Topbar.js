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
import { DarkMode, LightMode, Twitter } from '@mui/icons-material';
import ThemeContext from '../../context/ThemeContext';

const StyledTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(3),
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(1)
  }
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: theme.palette.primary.contrastText
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 20,
  elevation: 0,
  textTransform: 'none'
}));

const StyledDiv = styled('div')({
  flexGrow: 1
});

const Topbar = (props) => {
  const { ...rest } = props;
  const theme = useTheme();
  const colorMode = React.useContext(ThemeContext);

  const [backgroundColor, setBackgroundColor] = useState(
    theme.palette.primary.main
  );

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  useEffect(() => {
    setBackgroundColor(
      trigger
        ? theme.palette.background.paper
        : theme.palette.background.default
    );
  }, [
    trigger,
    theme.palette.background.paper,
    theme.palette.background.default
  ]);

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
              <StyledButton variant="contained" color="secondary">
                Contact Us
              </StyledButton>
            </Hidden>
            <Stack direction="row">
              <IconButton
                sx={{
                  marginLeft: theme.spacing(1),
                  color: theme.palette.primary.contrastText
                }}>
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  marginLeft: theme.spacing(1),
                  color: theme.palette.primary.contrastText
                }}
                onClick={colorMode.toggleColorMode}
                color="inherit">
                {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Stack>
          </Toolbar>
        </StyledAppBar>
      )}
    </>
  );
};

Topbar.defaultProps = {
  className: {},
  onSidebarOpen: () => {}
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
