import React from 'react'
import Image from 'next/image';

function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Metadata */}

      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">We'd love to hear from you! Reach out to us today.</p>
        </div>

        <div className="absolute inset-0">
                  <Image
                    src="/images/agency-banner.jpeg" // Replace with your image path
                    alt="Note Agence Banner"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30 "
                  />
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Maps Integration */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912458966!2d3.375295414770714!3d6.524379295278552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae62cf0fb%3A0x7e0a0a0a0a0a0a0a!2sNote%20Agence!5e0!3m2!1sen!2sng!4v1698756456789"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page