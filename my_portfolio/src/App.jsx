
import styles from './style';
import React from 'react';

import { Navbar, Layout } from "./components"
import { Home, About, Projects, Contacts } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {

  return (
    
      <div className='flex h-screen w-screen items-stretch'>
        <div className='flex-1 bg-black'></div>
        <div className='grow-0 shrink basis-[1280px] bg-primary'>
          <Router>
            <div className='bg-primary dark:bg-secondary w-full overflow-hidden'>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar/>
                </div>
              </div>
            </div>
    
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Projects" element={<Projects/>}/>
              <Route path="/Contacts" element={<Contacts/>}/>
            </Routes>
          </Router>
        </div>
        <div className='flex-1 bg-black'></div>
      </div>
    
  )
}

export default App