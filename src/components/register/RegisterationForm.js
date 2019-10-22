import React from 'react';
import {Link} from 'react-router-dom';

const RegistrationForm = () => {
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
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-purple-700 text-white hover:bg-purple-500 focus:outline-none my-1"
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
