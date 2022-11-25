import React from 'react'

const Layout = (props) => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='flex-1 bg-zinc-50'>
      </div>
      <div className='grow-0 shrink basis-[1280px] bg-white h-full py-4 px-16 flex flex-col gap-16'>
          {props.children}
      </div>
      <div className='flex-1 bg-zinc-50'>
      </div>
    </div>
  )
}

export default Layout