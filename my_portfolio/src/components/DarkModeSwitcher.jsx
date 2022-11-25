import React, { useState } from 'react'
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from '../hooks/useDarkMode';

export default function DarkModeSwitcher() {

    const [colorTheme, setTheme] = useDarkMode();
    const [isDarkMode, setDarkMode] = useState( colorTheme === "light" ? true : false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkMode(checked);
    };


  return (
    <>
      <div>
          <DarkModeSwitch
            sunColor='#2dd4bf'
            onChange={toggleDarkMode} 
            checked={isDarkMode}
            size={25}
          />
      </div>
    </>
  )
}