import React from 'react';


const char = (props) =>{
  const style={
    display :'inline-block',
    padding : '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
  };
  return(
    <div>
    <p className="style" onClick={props.clicked}>{props.character}  </p>
    </div>
  )

}
 export default char;
