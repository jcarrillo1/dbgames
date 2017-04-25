import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

const GameDisplayPanel = ({ game, link, className }) => (
  <NavLink to={`${link}${game.product_id}`} >
    <div className={classnames('game-item', className)}>
      <img className="game-image" src={game.image} alt="" />
      <div className="game-title">
        {game.title}
      </div>
      <p><span className="game-price">${game.price}</span></p>
    </div>
  </NavLink>
)

export default GameDisplayPanel;
