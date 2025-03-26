import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-indigo-600 dark:bg-indigo-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre présence en ligne ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contactez-nous
            </Link>
            <Link 
              href="/projets"
              className="bg-transparent hover:bg-indigo-700 text-white border border-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}