import React from 'react';

const UserProfile = ({ user }) => { // user prop that we passed the response data from login
  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p> 
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Status: {user.status}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default UserProfile;
