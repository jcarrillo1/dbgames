import React from 'react';
import { withRouter } from 'react-router-dom';


const UserTableRow = ({ history, user }) => (
  <tr onClick={() => history.push(`/admin/users/${user.id}`)}>
    <td>{user.id}</td>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{user.email}</td>
    <td>{user.role}</td>
  </tr>
);

export default withRouter(UserTableRow);
