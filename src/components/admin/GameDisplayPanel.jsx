import React from 'react';
import { NavLink } from 'react-router-dom';

const GameDisplayPanel = ({ game }) => (
  <NavLink to={`/employee/games/${game.product_id}`} >
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">{game.title}</h3>
      </div>
      <div className="panel-body">
        {game.description}
      </div>
    </div>
  </NavLink>
)

export default GameDisplayPanel;
