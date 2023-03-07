import React from 'react';
import Navigation from '../Router/Navigation';
// import { useState } from 'react';

const Register = () => {
  // const [userEmail,setuserEmail] = useState("");
  let fName = "";
  let lName = "";
  let email = "";
  let phoneNo = "";
  let password = "";

  const handleData = (event)=>{
    if(  event.target.name==="fName"){
      fName=  event.target.value;
    }else if(  event.target.name==="lName"){
      lName=  event.target.value;
    }else if(  event.target.name==="email"){
      email=  event.target.value;
    }else if(  event.target.name==="phoneNo"){
      phoneNo=  event.target.value;
    }else if(  event.target.name==="password"){
      password=  event.target.value;
    }
  }
  const postData = async(e)=>{
      e.preventDefault();
      // console.log(userEmail);
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fName,lName,email,phoneNo,password})
      };
      fetch('/auth/sign-up', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
  
      // const data = await res.json();
      // console.log(data.Message);
  }


return (
  <React.Fragment>
    <Navigation/>
    <div className="FormContainer">
        <form method='POST'>
            <label htmlFor="fName">First Name:</label> <br />
            <input type="text" name="fName" id="Name" onChange={handleData}/><br />
            <label htmlFor="lName">Last Name:</label><br />
            <input type="text" name="lName" id="lName" onChange={handleData}/><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" id="email" onChange={handleData}/><br />
            <label htmlFor="phoneNo">Phone No:</label><br />
            <input type="number" name="phoneNo" id="phoneN" onChange={handleData}/><br />
            <label htmlFor="password">Password:</label><br />
            <input type="password" name="password" id="pass" onChange={handleData}/><br />
            <button type="button" onClick={postData}>Submit</button><br />
        </form>
    </div>
  </React.Fragment>
)
}

export default Register