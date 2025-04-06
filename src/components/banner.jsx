import React from 'react'

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10"> 
        <div className=" ">
          <img src="../assets/Logo.png"  alt="" />

            <img
              className="h-40 "
              src="/src/assets/Logo.png"
              alt="Banner"  />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-4 mb-8">
          <h1
            className="text-center text-red-400 font-recursive font-normal text-3xl tracking-wide 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl"
          >
            Writings for Developers
          </h1>

          <p
            className="text-sm 2xl:text-2xl xl:text-2xl lg:text-md md:text-md sm:text-md"
          >
            Curated collection of articles for busy developers
          </p>
        </div>
      </div>
  )
}

export default Banner