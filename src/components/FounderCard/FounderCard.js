import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useTheme } from '@mui/material';
import { Instagram, LinkedIn, Twitter, Web } from '@mui/icons-material';
import getInitials from '../../utils/getInitials';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const StyledFounderCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.paper
}));

const FounderCard = ({ founderInfo }) => {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledFounderCard elevation={0} variant="outlined">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {getInitials(founderInfo.name)}
          </Avatar>
        }
        title={
          <Typography sx={{ color: theme.palette.white, fontWeight: 900 }}>
            {founderInfo?.name}
          </Typography>
        }
        subheader={
          <Typography color={theme.palette.text.contrastText}>
            {founderInfo?.title}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="350"
        image={founderInfo?.profilePic}
        alt={founderInfo?.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {founderInfo?.descriptionShortened}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {founderInfo.linkedInProfile !== '' && (
          <IconButton
            aria-label="Visit LinkedIn Profile"
            component={Link}
            href={founderInfo.linkedInProfile}
            target="_blank">
            <LinkedIn color="secondary" />
          </IconButton>
        )}
        {founderInfo.twitterProfile !== '' && (
          <IconButton
            aria-label="Visit Twitter Profile"
            component={Link}
            href={founderInfo.twitterProfile}
            target="_blank">
            <Twitter color="secondary" />
          </IconButton>
        )}
        {founderInfo.instagramProfile !== '' && (
          <IconButton
            aria-label="Visit Instagram Profile"
            component={Link}
            href={founderInfo.instagramProfile}
            target="_blank">
            <Instagram color="secondary" />
          </IconButton>
        )}
        {founderInfo.mediumProfile !== '' && (
          <IconButton
            aria-label="Visit Instagram Profile"
            component={Link}
            href={founderInfo.mediumProfile}
            target="_blank">
            <Web color="secondary" />
          </IconButton>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon color="secondary" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <strong>Full Profile:</strong>
          </Typography>
          {founderInfo.completeDescription.map((text) => (
            <Typography paragraph>{text}</Typography>
          ))}
        </CardContent>
      </Collapse>
    </StyledFounderCard>
  );
};

FounderCard.propTypes = {
  founderInfo: PropTypes.object.isRequired
};

export default FounderCard;
