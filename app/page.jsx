import { Metadata } from 'next';
import Hero from '@/components/sections/hero';
import ServicesGrid from '@/components/sections/services-grid';
import Testimonials from '@/components/sections/testimonials';
import CTA from '@/components/sections/cta';

export const metadata = {
  title: 'E-Web Pages | Agence de Développement Web',
  description: 'E-Web Pages est une agence spécialisée dans le développement web, l\'optimisation SEO et la formation numérique.'
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <CTA />
    </>
  );
}