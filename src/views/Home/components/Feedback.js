import React from 'react';
import {
  Box,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/styles';
import { CommonCard, CommonCardLight } from '../../../Styles/Home';
import _feedback from '../../../_mockData/_feedback';
import avatar from '../../../assets/Graphics/avatar.jpg';

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
      <CardContent>
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
        <Grid spacing={2} container>
          {_feedback.map((r) => (
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} id={r.id}>
              <CommonCardLight elevation={0}>
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
              </CommonCardLight>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </CommonCard>
  );
};

export default Feedback;
