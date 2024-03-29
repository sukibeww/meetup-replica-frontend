import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/authContext';
import {useHistory} from 'react-router-dom';
import useForm from 'react-hook-form';
import axios from 'axios'

const Login = (props) => {
  const authContext = useContext(AuthContext)
  const {login} = authContext;
  const {register, handleSubmit, errors} = useForm();
  let history = useHistory();
  const onSubmit = async (data) =>{
    if(data){
      await axios.post(`http://localhost:5000/users/login`, data)
      .then((res) => {
        login(res.data);
      })
      .catch((err) =>{
        console.log(err);
      });
    }
    history.push('/')
  }
  return (
    <div className="h-screen w-screen">
    <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div
        className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
        style={{ height: 500 }}
      >
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <div className="flex flex-col flex-1 justify-center mb-8">
            <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
            <div className="w-full mt-4">
              <form
                className="form-horizontal w-3/4 mx-auto"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col mt-4">
                  <input
                    ref={register({required: true})}
                    id="email"
                    type="text"
                    className="flex-grow h-8 px-2 border rounded border-grey-400"
                    name="email"
                    defaultValue=""
                    placeholder="Email"
                  />
                </div>
                {errors.email && <p className="text-red-600"><strong>This is required</strong></p>}
                <div className="flex flex-col mt-4">
                  <input
                    ref={register({required: true})}
                    id="password"
                    type="password"
                    className="flex-grow h-8 px-2 rounded border border-grey-400"
                    name="password"
                    required
                    placeholder="Password"
                  />
                </div>
                {errors.password && <p className="text-red-600"><strong>This is required</strong></p>}
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="mr-2"
                  />{" "}
                  <label htmlFor="remember" className="text-sm text-grey-dark">
                    Remember Me
                  </label>
                </div>
                <div className="flex flex-col mt-8">
                  <button
                    type="submit"
                    className="bg-purple-700 hover:bg-purple-500 text-white text-sm font-semibold py-2 px-4 rounded">
                    Login
                  </button>
                </div>
              </form>
              <a
                  className="no-underline hover:underline text-blue-dark text-xs text-indigo-600"
                  href="/register"
                >
                  Sign up
                </a>
            </div>
          </div>
        </div>
        <div
          className="hidden md:block md:w-1/2 rounded-r-lg"
          style={{
            background:
              'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        />
      </div>
    </div>
  </div>
  )
}

export default Login;
