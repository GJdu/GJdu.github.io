import React from 'react'

const Layout = (props) => {
  return (
    <div className='flex'>
      <div className='flex-1 bg-zinc-100 dark:bg-black'>
      </div>
      <div className='grow-0 shrink basis-[1280px]'>
          {props.children}
      </div>
      <div className='flex-1 bg-zinc-100 dark:bg-black'>
      </div>
    </div>
  )
}

export default Layout