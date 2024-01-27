'use client'
import Script from "next/script";
import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
    const [theme, setTheme] = useState('light')

    const toggleDarkMode = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark');
            window.localStorage.setItem('color-theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.classList.add('dark');
            window.localStorage.setItem('color-theme', 'dark');
            setTheme('dark');
        }
    };

    const defaultTheme = () => {
        const themeLocalStorage = localStorage.getItem('color-theme')
        const themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

        return (themeLocalStorage ?? themeSystem)
    }

     useEffect(() => {
         const theme = window.localStorage.getItem('color-theme');
         if (!theme) return setTheme(defaultTheme())
         if (theme === 'dark') {
             document.documentElement.classList.add('dark');
             setTheme('dark');
         }
     }, [theme]);

    return (
        <>
            <Script strategy="afterInteractive" >
                {`
                let themeLocalStorage   = localStorage.getItem('color-theme')
                let themeSystem         = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                document.documentElement.classList.add(themeLocalStorage ?? themeSystem)
                `}
            </Script>

            <button
                onClick={toggleDarkMode}
                aria-label="theme switching"
                type="button"
                className="group mr-3 flex h-9 w-9 max-w-[2.25rem] items-center justify-center rounded-lg border border-gray-200/40 bg-gray-100/20 dark:border-gray-700/40 dark:bg-gray-800/20"
            >
                {theme === 'dark' ? (<svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative hidden h-5 w-5 text-white duration-300 group-hover:rotate-180 dark:inline-block"
                ><path
                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                ></path>
                </svg>) : (<svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative h-4 w-4 text-gray-700 duration-500 group-hover:rotate-[360deg] group-hover:text-gray-900 dark:hidden"
                ><path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                ></path>
                </svg>)}

            </button>
        </>

    );
}