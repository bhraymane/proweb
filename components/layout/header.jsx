"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ui/theme-toggle';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navigation = [
    { name: 'Notre Agence', href: '/agence' },
    { name: 'Nos Services', href: '/services' },
    { name: 'Nos Formations', href: '/formations' },
    { name: 'Nos Projets', href: '/projets' },
    { name: 'Contactez-nous', href: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full bg-white top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? ' dark:bg-[#2B2464] shadow-md py-5'
          : 'dark:bg-[#2B2464] py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
          <Link href="/" className="flex gap-0.5 font-semibold items-center">
            
              <Image
                src="/images/logo.svg"
                alt="E-Web Pages Logo"
                width={30}
                height={30}        
                priority
              />
              <p className='text-[#2B2464] dark:text-white'>ro-Web</p>
          </Link>

          </div>
          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center">
            <ThemeToggle />
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 py-4'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 pb-4 flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Thème:</span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}