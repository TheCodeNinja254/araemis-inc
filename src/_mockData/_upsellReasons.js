import React from 'react';
import { DataArray, Light, Money, Support } from '@mui/icons-material';

const _upsellReasons = [
  {
    id: 1,
    icon: <Light />,
    title: 'Speed',
    text: 'Delivering to your business in the shortest time possible is our business.'
  },
  {
    id: 2,
    icon: <Money />,
    title: 'Cost',
    text: 'We beat our competitors at cost with the same or better quality products'
  },
  {
    id: 3,
    icon: <Support />,
    title: 'Retention & Support',
    text: 'We do our best to walk with you throughout your product development and deployment journey'
  },
  {
    id: 4,
    icon: <DataArray />,
    title: 'We Listen',
    text: 'We strive to deliver solutions that fit like a glove & with cutting-edge software.'
  }
];

export default _upsellReasons;
