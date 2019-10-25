import React from 'react';
import {Link} from 'react-router-dom';
import useForm from 'react-hook-form';
import axios from 'axios';

const RegistrationForm = () => {
  const {register, handleSubmit , errors} = useForm();
  const onSubmit = async (data) => {
    if (!data) {
      }
      else {
      console.log(data);
      await   axios.post(`http://localhost:5000/users/new`, data)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(err=>{
          console.log(err);
        })
    }
  }

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              ref={register({required: true})}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              id="input-name"
            />
            {errors.name && <p className="text-red-600"><strong>This is required</strong></p>}
            <input
              ref={register({required: true})}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              id="input-email"
            />
            {errors.email && <p className="text-red-600"><strong>This is required</strong></p>}
            <input
              ref={register({required: true})}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              id="input-password"
            />
            {errors.password && <p className="text-red-600"><strong>This is required</strong></p>}
            <input
              ref={register({required: true})}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password2"
              placeholder="Confirm Password"
              id="input-password2"
            />
            {errors.password2 && <p className="text-red-600"><strong>This is required</strong></p>}
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-purple-700 text-white hover:bg-purple-500 focus:outline-none my-1"
            >
              Create Account
            </button>
        </form>
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
