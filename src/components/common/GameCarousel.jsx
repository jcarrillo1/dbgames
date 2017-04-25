import React from 'react';
import Slider from 'react-slick';
import GameDisplayPanel from './GameDisplayPanel';

const carouselSettings = {
  arrows: true,
  dots: false,
  infinite: false,
  autoPlay: false,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const GameCarousel = (props) => (
  <Slider {...carouselSettings}>
    {props.games.map((game, index) => (
      <div key={index}>
        <GameDisplayPanel game={game} link={props.link} />
      </div>
    ))}
  </Slider>
);

export default GameCarousel;
