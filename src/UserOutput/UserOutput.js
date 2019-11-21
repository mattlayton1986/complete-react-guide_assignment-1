import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => (
  <div className="UserOutput">
    <p>This is my username</p>
    <p>{props.username}</p>
  </div>
);

export default UserOutput;