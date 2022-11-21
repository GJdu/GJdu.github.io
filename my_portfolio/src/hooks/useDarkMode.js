import {useEffect, useState} from "react"

export default function useDarkMode() {

    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = theme === "dark" ? "light" : "dark"

    useEffect(()=> {
        const root = window.document.documentElement;
        document.documentElement.classList.remove(colorTheme);
        document.documentElement.classList.add(theme);

        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}