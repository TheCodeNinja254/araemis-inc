import { keyframes } from '@mui/material';

const slideInTopForward = keyframes`
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
    transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
    transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
    transform-origin: 50% 1400px;
    opacity: 1;
  }
`;

export default slideInTopForward;
