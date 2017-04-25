import React from 'react';
import Rater from 'react-rater';

const RatingComponent = ({ size, value, onClick }) => (
  <Rater total={5} rating={value} interactive={!!onClick} onRate={onClick} />
);

export default RatingComponent;
