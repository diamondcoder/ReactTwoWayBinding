import React from 'react';

const userOutput=(props)=>{
  return(
    <div>
    <p> Hello my nickname is Diamond </p>
    <p> What is your nickname? {props.username}  </p>

    </div>
  )

}

export default userOutput;
