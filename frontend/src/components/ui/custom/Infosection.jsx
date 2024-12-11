import React from 'react'

function Infosection() {
  return (
    <section className='mt-[100px]' >
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Drive the Dream, Own the BMW!
          </h2>

          <p className="mt-4 text-gray-700">
          Find your perfect BMW at the best price! Expertly tuned and thoroughly inspected, our cars deliver unmatched performance and reliability. Drive your dream today!
          </p>
        </div>
      </div>

      <div className="md:col-span-3">
        <img
          src="https://wallpapercave.com/wp/wp5760801.jpg" 
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default Infosection