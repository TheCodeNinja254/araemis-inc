import React from 'react';
import {
  Box,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/styles';
import { CommonCard } from '../../../Styles/Home';
import _feedback from '../../../_mockData/_feedback';
import avatar from '../../../assets/Graphics/avatar.jpg';
import CommonCardLightFixedWidth from '../../../Styles/Home/CommonCardLightFixedWidth';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  height: 25,
  width: 25,
  marginTop: theme.spacing(1.5),
  marginRight: theme.spacing(1)
}));

const Feedback = () => {
  const theme = useTheme();

  return (
    <CommonCard elevation={0}>
      <CardContent style={{ padding: 20 }}>
        <Typography
          variant="h3"
          color="text.primary"
          sx={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(3) }}>
          <strong>What our clients say</strong>
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(1) }}>
          Hear about us from other customers we have had the please to work
          with.
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          style={{
            marginBottom: theme.spacing(3),
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
          {_feedback.map((r) => (
            <CommonCardLightFixedWidth elevation={0}>
              <CardMedia
                sx={{ height: 120 }}
                image={r.imageSrc}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="body1" sx={{ fontSize: 12 }}>
                  <strong>{r.title}</strong>
                </Typography>
                <Typography sx={{ mt: 1, fontSize: 10 }} variant="body2">
                  {r.text}
                </Typography>
                <Stack direction="row">
                  <StyledAvatar
                    src={avatar}
                    sx={{
                      height: 25,
                      width: 25,
                      marginTop: theme.spacing(1.5),
                      marginRight: theme.spacing(1)
                    }}
                  />
                  <Box sx={{ marginTop: 1 }}>
                    <Typography sx={{ fontSize: 12 }}>
                      <strong>Ryan Hale</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 10 }}>
                      Project Manager
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </CommonCardLightFixedWidth>
          ))}
        </Stack>
      </CardContent>
    </CommonCard>
  );
};

export default Feedback;
