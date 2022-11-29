
import styles from './style';
import React from 'react';

import { Navbar, Layout, Footer } from "./components"
import { Home, About, Projects, Skills } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {

  return (
      <Layout>
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
              <Route path="/Skills" element={<Skills/>}/>
            </Routes>

            <div className='bg-primary dark:bg-secondary w-full overflow-hidden'>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Footer/>
                </div>
              </div>
            </div>
          </Router>
      </Layout>
  )
}

export default App