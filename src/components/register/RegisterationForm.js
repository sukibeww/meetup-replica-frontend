import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const [userInformation , setUserInformation] = useState({
    name: null,
    email: null,
    password : null,
    password2 : null
  });
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            id="input-name"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            id="input-email"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            id="input-password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            id="input-password2"
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-purple-700 text-white hover:bg-purple-500 focus:outline-none my-1"
            onClick={()=> {
              setUserInformation({
                name : document.getElementById("input-name").value,
                email : document.getElementById("input-email").value,
                password : document.getElementById("input-password").value,
                password2 : document.getElementById("input-password2").value
              })
              axios.post(`https://ca-hackathon-backend.herokuapp.com//users/new`, {userInformation})
                .then(res => {
                  console.log(res);
                  console.log(res.data);
                })
                .catch(err=>{
                  console.log(err);
                })
            }}

          >
            Create Account
          </button>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <div>
            <Link to="/home"/>
            <a
              className="no-underline border-b border-blue text-blue text-purple-700"
              href="/login"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default RegistrationForm;
