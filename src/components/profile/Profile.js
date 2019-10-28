import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/authContext';
import defaultProfilePic from './default.svg'

const Profile = () => {
  const authContext = useContext(AuthContext)
  const {userName} = authContext;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded rounded-t-lg overflow-hidden shadow my-3 max-w-6xl">
        <img src="https://images.unsplash.com/photo-1460551204960-763bc82b7d8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80" className="w-full object-cover" style={{height: "40vh"}} alt="cover-img"/>
        <div className="flex justify-center -mt-8">
          <img
            alt="profile-pic"
            src={defaultProfilePic}
            className="rounded-full border-solid border-white border-2 -mt-16 w-48 h-48"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h1 className="text-black text-5xl bold font-sans">{userName}</h1>
          <p className="mt-2 font-sans font-light text-grey-dark">
            Hello, I'm new here!
          </p>
        </div>
        <div className="flex justify-center pb-3 text-grey-dark">
          <div className="text-center mr-3 border-r pr-3">
            <h2>0</h2>
            <span>Photos</span>
          </div>
          <div className="text-center">
            <h2>0</h2>
            <span>Friends</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
