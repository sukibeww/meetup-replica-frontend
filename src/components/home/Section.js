import React from 'react';

const HomeSection = () => {
  return (
    <section className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Lorem</h4>
          <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas pretium massa, id consequat tortor elementum ac. Sed nec augue accumsan, varius augue facilisis, suscipit enim. Vivamus ac lacus at.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://svgshare.com/i/FfM.svg" alt="Monitoring" />
        </div>
      </div>
      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <img src="https://svgshare.com/i/FeB.svg" alt="Reporting" />
        </div>
        <div className="w-full md:w-1/2 pl-10">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Lorem Ipsum</h4>
          <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas pretium massa, id consequat tortor elementum ac. Sed nec augue accumsan, varius augue facilisis, suscipit enim. Vivamus ac lacus at.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;