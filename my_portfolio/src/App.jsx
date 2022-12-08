
import styles from './style';
import React from 'react';

import { Navbar, Layout, Footer } from "./components"
import { About, Experiences, Projects, Skills } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {

  return (
      <Layout>
          <Router>
            <div className='bg-primary dark:bg-secondary w-full'>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar/>
                </div>
              </div>
            </div>
    
            <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/Experiences" element={<Experiences/>}/>
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