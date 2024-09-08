import { useState } from "react";

import darkModeIcon from "/icons/darth-vader-svgrepo-com.svg";
import lightModeIcon from "/icons/chewbacca-svgrepo-com.svg";

export const DarkModeToggle = () => {
    const isDarkModeDefault = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDark, setIsDark] = useState(isDarkModeDefault);

    const darkModeHandler = () => {
        setIsDark(!isDark);
        document.body.classList.toggle("dark");
    }

    return (
        <button className="p-1 float-right border border-line rounded dark:border-lineDark dark:bg-darkBg w-10 h-10" onClick={darkModeHandler} data-test-theme-mode>
            <img src={!isDark ? lightModeIcon : darkModeIcon} alt={!isDark ? 'chewbacca' : 'darth-vader'} className="w-full h-full" />
        </button>
    );
}
