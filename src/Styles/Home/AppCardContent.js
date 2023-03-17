import { CardContent, styled } from '@mui/material';

const AppCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: theme.palette.white
  // backdropFilter: 'blur(2px)'
}));

export default AppCardContent;
