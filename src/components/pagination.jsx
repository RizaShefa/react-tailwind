import React from 'react'

export const Pagination = () => {
  return (
      <div>
        <li
          className="flex justify-center  size-full mt-4 mb-10 gap-3 tracking-widest font-recursive 2xl:text-lg 2xl:gap-8 xl:text-lg xl:gap-8 lg:text-lg lg:gap-8 md:text-lg md:gap-8 sm:text-lg sm:gap-8 text-md text-zinc-500 "
        >
          <ul>
            previous
          </ul>
          <ul>
            1
          </ul>
          <ul className="border-t-2 text-red-400">
            2
          </ul>
          <ul>
            3
          </ul>
          <ul>
            4
          </ul>
          <ul>
            5
          </ul>
          <ul>
            Next
          </ul>
        </li>
        </div>
  )
}

export default Pagination
