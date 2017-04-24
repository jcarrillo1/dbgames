import React from 'react';
import { NavLink } from 'react-router-dom';

const UserDisplayPanel = ({ user }) => (
  <NavLink to={`/admin/users/${user.id}`} >
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">{`${user.first_name} ${user.last_name}`}</h3>
      </div>
      <div className="panel-body">
        Email: <p>{user.email}</p>
        Role: <p>{user.role}</p>
      </div>
    </div>
  </NavLink>
)

export default UserDisplayPanel;
