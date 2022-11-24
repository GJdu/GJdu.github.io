
import styles from './style';
import React from 'react';

import {Navbar, Hero} from "./components"
import { Home, About, Projects, Contacts } from './components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App () {

  return (



    <div className='App'>
      <Router>
        <div className='bg-primary dark:bg-secondary w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar/>
            </div>
          </div>

          {/* <div className={`bg-primary dark:bg-secondary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero/>
            </div>
          </div> */}
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>

  )
}

export default App