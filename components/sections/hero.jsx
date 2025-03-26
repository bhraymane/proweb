"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-16 md:pt-20  pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Content */}
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 ease-out`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-indigo-600 dark:text-indigo-400">Solutions web</span> innovantes pour votre entreprise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Pro-Web crée des expériences digitales exceptionnelles qui transforment votre présence en ligne et boostent votre croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                Démarrer un projet
              </Link>
              <Link 
                href="/services"
                className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-3 px-6 rounded-lg border border-indigo-200 dark:border-gray-700 transition-colors duration-300 text-center"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-1000 delay-300 ease-out`}>
            <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/hero.jpeg"
                alt="Solutions web modernes et innovantes"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-500 dark:bg-indigo-600 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-300 dark:bg-indigo-800 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}