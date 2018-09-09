import React from 'react';


const Validation = (props) =>{
let validationmsg= "text long enough";

if (props.len <= 5){
  validationmsg = "text too short";
}

return (
  <div>
  <p> { validationmsg }</p>


</div>
)
};
export default Validation;
