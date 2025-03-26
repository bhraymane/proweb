import Image from 'next/image';


export const metadata = {
  title: 'Notre Agence | Pro-Web ',
  description: 'Découvrez Pro-Web, une agence web spécialisée dans la création de sites web modernes, le référencement SEO et la formation numérique.'
};

export default function AgencyPage() {
  return(
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center ">
          <h1 className="text-5xl font-bold mb-4 ">Welcome to Note Agence</h1>
          <p className="text-xl">Your Partner in Digital Innovation</p>
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

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <p className="mb-4">
              Note Agence is a forward-thinking digital agency dedicated to crafting exceptional web experiences.
              With a team of skilled professionals, we specialize in web development, UI/UX design, and digital marketing.
              Our mission is to empower businesses by delivering innovative solutions that drive growth and engagement.
            </p>
            <p>
              Founded in 2020, we have worked with clients across various industries, helping them achieve their goals
              through cutting-edge technology and creative strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-700">
                Building scalable, high-performance websites tailored to your needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-700">
                Crafting intuitive and visually appealing designs that captivate users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-700">
                Driving traffic and conversions through targeted marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to take your business to the next level? Contact us today to discuss your project!
          </p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )

}
