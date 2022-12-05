import React, { useState } from "react";

export default function contact() {
    const [validate, setValidate] = useState(false)
    const [validate1, setValidate1] = useState(false)
  const handleKeyUp = (e) => {
    let email = document.querySelector("#email").value;
    const re =
    /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    let vTest = re.test(String(email).toLowerCase());
    if(vTest){
        setValidate (false)
    }
    else{
        setValidate (true)
    }
  };

  const handleKeyUp1 = (e) => {
    let phone = document.querySelector("#phone").value;
    const re =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    let vTest = re.test(String(phone).toLowerCase());
    if(vTest){
        setValidate1 (false)
    }
    else{
        setValidate1 (true)
    }
  };

  return (
    <div class="body contact">
      <div class="card card3 form">
        <tag>Email:</tag>
        {validate && (<tag class='error'>invalid Email</tag>)}
        <input type="text" onKeyUp={handleKeyUp} id="email"></input>
        <tag>Phone Number:</tag>
        {validate1 && (<tag class='error'>invalid Phone Number</tag>)}
        <input type="text" onKeyUp={handleKeyUp1} id="phone"></input>
        <tag>Comment:</tag>
        <input type="text"></input>
        <div>
          <button type="submit">Submit Contact Request</button>
        </div>
      </div>
    </div>
  );
}
