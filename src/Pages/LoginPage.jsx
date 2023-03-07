import React, {  useState } from 'react';
// import axios 
import "./LoginPage.css";


const LoginPage = () => {

    const [userEmail,setuserEmail] = useState("");
    const [userPass,setuserPass] = useState("");
    
    const handleData = (event)=>{
        if(event.target.name==="Email"){
            setuserEmail(event.target.value);
        }
        else if(event.target.name === "password"){
            setuserPass(event.target.value);
        }

    }
    const postData = async(e)=>{
        e.preventDefault();
        console.log(userEmail);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email:userEmail,pass:userPass})
        };
        fetch('/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    
        // const data = await res.json();
        // console.log(data.Message);
    }


  return (
    <div className="FormContainer">
        <form method='POST'>
            {/* <label htmlFor="Name">Name:</label> */}
            {/* <input type="text" name="Fname" id="Name" /><br /> */}
            <label htmlFor="Email">Email:</label><br />
            <input type="email" name="Email" id="Email" value={userEmail} onChange={handleData}/><br />
            <label htmlFor="Password">Password:</label><br />
            <input type="password" name="password" id="pass" value={userPass} onChange={handleData}/><br />
            <button type="button" onClick={postData}>Submit</button><br />
        </form>
    </div>
  )
}

export default LoginPage