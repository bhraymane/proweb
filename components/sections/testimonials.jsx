"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      content: "E-Web Pages a transformé notre présence en ligne ! Leur équipe a créé un site e-commerce qui a dépassé toutes nos attentes. Les ventes ont augmenté de 40% en seulement deux mois.",
      author: "Marie Dupont",
      position: "Directrice, Mode Élégance",
      image: "/p1.jpeg"
    },
    {
      id: 2,
      content: "Leur expertise en référencement a fait toute la différence. Notre trafic organique a doublé et nous sommes désormais en première page pour nos mots-clés principaux.",
      author: "Thomas Leroux",
      position: "Fondateur, Innov'Tech",
      image: "/p2.jpeg"
    },
    {
      id: 3,
      content: "La formation SEO proposée par E-Web Pages a permis à notre équipe marketing d'acquérir des compétences précieuses. Nous gérons maintenant notre stratégie de contenu avec confiance.",
      author: "Sophie Marceau",
      position: "Responsable Marketing, Groupe Santé Plus",
      image: "/p3.jpeg"
    }
  ];

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector('.testimonials-section'));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="testimonials-section py-16 md:py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? 'bg-indigo-600 dark:bg-indigo-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}