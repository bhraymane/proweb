"use client";

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted){
    return null
  }

  return (
    <button
      className="relative cursor-pointer inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors  "
      onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark')}}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-indigo-500 transition-transform ease-in duration-75 `}
      />
      <span className="absolute inset-0 flex items-center justify-start pl-1.5 dark:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="absolute inset-0 flex items-center justify-end pr-1.5 hidden dark:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-indigo-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </span>
    </button>
  );
}