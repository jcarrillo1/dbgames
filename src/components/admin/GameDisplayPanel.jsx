import React from 'react';
import { NavLink } from 'react-router-dom';

const GameDisplayPanel = ({ game }) => (
  <NavLink to={`/employee/games/${game.product_id}`} >
    <div className="game-item col-sm-3">
      <img className="game-image" src={game.image} alt="" />
      <div className="game-title">
        {game.title}
      </div>
      <p><span className="game-price">${game.price}</span></p>
    </div>
  </NavLink>
)

export default GameDisplayPanel;
