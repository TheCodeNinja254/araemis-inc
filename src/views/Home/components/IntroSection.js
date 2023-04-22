import React from 'react';
import {
  Box,
  Chip,
  colors,
  Grid,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { DarkMode, WbSunnySharp } from '@mui/icons-material';
import { IntroBox } from '../../../Styles/Home';
import timeOfDayWorded from '../../../utils/timeOfDayWorded';
import aboutImg from '../../../assets/Graphics/about2.jpg';
import Image from '../../../components/Image';
import _tags from '../../../_mockData/_tags';

const timeOfDay = timeOfDayWorded();

const IntroSection = () => {
  const theme = useTheme();
  return (
    <Box style={{ padding: 12 }}>
      <IntroBox display="flex" justifyContent="center">
        <Stack direction="row" style={{ marginBottom: theme.spacing(1) }}>
          <Typography
            style={{
              marginRight: theme.spacing(1),
              fontSize: 40,
              color: colors.yellow[900],
              [theme.breakpoints.down('small')]: {
                fontSize: 30
              }
            }}>
            Good
          </Typography>
          <Typography
            style={{
              marginRight: theme.spacing(2),
              fontSize: 40,
              color: theme.palette.secondary.lighter,
              [theme.breakpoints.down('small')]: { fontSize: 30 }
            }}>
            {timeOfDay}
          </Typography>
          {timeOfDay === 'evening' ? (
            <DarkMode
              style={{
                height: 60,
                color: colors.yellow[500]
              }}
            />
          ) : (
            <WbSunnySharp
              style={{
                height: 60,
                color: colors.yellow[500]
              }}
            />
          )}
        </Stack>
      </IntroBox>
      <div>
        <Typography style={{ color: colors.brown[400] }}>
          All about us...
        </Typography>
        <Stack
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
          }}
          direction="row">
          {_tags.map((tag) => (
            <Chip
              label={tag.tagName}
              key={tag.id}
              style={{ marginRight: theme.spacing(1) }}
            />
          ))}
        </Stack>
      </div>
      <Grid container spacing={1} style={{ marginTop: theme.spacing(6) }}>
        <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
          <Typography color={colors.brown[400]}>
            At Araemis consulting, you will get...
          </Typography>
          <Typography
            variant="h3"
            color={colors.brown[500]}
            fontWeight={900}
            style={{ marginBottom: theme.spacing(2) }}>
            Highly vetted developers and teams, from Kenya
          </Typography>
          <Typography paragraph color="textPrimary">
            We connect global clients with top-notch developers from Kenya,
            offering you a seamless and hassle-free way to outsource your
            software development needs. Our team of experienced developers are
            skilled in a variety of programming languages and diverse
            experience.
          </Typography>
          <Typography paragraph color="textPrimary">
            At Araemis Consulting, we pride ourselves on providing excellent
            customer service and ensuring that our clients are paired with
            developers who have the skills and expertise needed for their
            specific projects. We understand that outsourcing can be a daunting
            task, which is why we take care of everything for you - from the
            initial screening and selection process to project management and
            ongoing support.
          </Typography>
          <Typography
            variant="h3"
            color={colors.brown[500]}
            fontWeight={900}
            style={{
              marginTop: theme.spacing(3),
              marginBottom: theme.spacing(2)
            }}>
            We walk the journey with you.
          </Typography>
          <Typography paragraph color="textPrimary">
            By choosing Araemis, you can benefit from cost-effective solutions
            without sacrificing quality. Our developers are known for their
            attention to detail, creativity, and ability to deliver projects on
            time and within budget. Whether you need a team of developers to
            work on a long-term project or just need to hire a developer for a
            specific task, we can help.
          </Typography>
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
          <Image
            src={aboutImg}
            alt="Meet Us."
            height={200}
            style={{
              borderRadius: 20,
              marginTop: theme.spacing(4),
              marginLeft: theme.spacing(10)
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntroSection;
