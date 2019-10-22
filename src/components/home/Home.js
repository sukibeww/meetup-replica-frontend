import React from 'react';
import {Link} from 'react-router-dom';
import HomeSection from './Section';

const Home = () => {
  return (
  <div>
    <div
    className="py-20"
    style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Upload and share photos with your friends!
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Seize and relive your favorite memories forever.
        </h3>
        <Link to="/register">
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Join us
          </button>
        </Link>
      </div>
    </div>
    <HomeSection />
  </div>
  )
}

export default Home;
