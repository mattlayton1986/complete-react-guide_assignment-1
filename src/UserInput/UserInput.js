import React from 'react';
import './UserInput.css';

const UserInput = props =>  {

  return (
    <div className="UserInput">
      <input 
        type="text" 
        onChange={props.onChange} 
        onFocus={props.onFocus} 
        onBlur={props.onBlur}
        value={props.username} 
      />
    </div>
  );
}

export default UserInput;