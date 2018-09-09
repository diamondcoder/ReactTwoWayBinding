import React from 'react';

const userInput=(props)=>{
  return(
    <div>
    <p>
    <input onChange={props.changed} type="text" value={props.username} />


    </p>
  

    </div>
  );

}

export default userInput;
