import React from 'react'

export const PageHeader = () => {
  return (
    <header className="text-slate-50 size-full ">
      <div className="flex justify-around items-center  pt-15">
        <div>
          <a>writinngs.dev</a>
        </div>
        <div className="flex gap-4">
          <a href="">categories</a>
          <a href="">articles</a>
          <a href="">about</a>
        </div>
      </div>

    </header>
  )
}
export default PageHeader
