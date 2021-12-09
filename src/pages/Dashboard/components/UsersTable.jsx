import React from 'react';
import { useUsers } from '../../Users/hooks/useUsers';

const UsersTable = () => {
  const users = useUsers();
  
  return (
    <table className='table is-hoverable is-fullwidth'>
      <thead>
        <tr>
          <th>Position</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Donat</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td><span className="icon"><i className={`fas ${user.id === 1 ? 'fa-crown' : 'fa-user'}`}></i></span> {user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <th>$ {Math.round(Math.random() * 1000)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default UsersTable;


// <p key={user.id}>
//   <span className="icon">
//     <i className="fas fa-user"></i>
//   </span>
//   {user.name}
// </p>