import './globals.css';
import { Inter , Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin']
})
export const metadata = {
  title: {
    default: 'X-Web | Agence de Développement Web',
    template: '%s | X-Web'
  },
  description: 'X-Web est une agence spécialisée dans le développement web, l\'optimisation SEO et la formation numérique.',
  keywords: ['développement web', 'SEO', 'formation numérique', 'agence web', 'création site internet'],
  authors: [{ name: 'X-Web' }],
  creator: 'X-Web',
  publisher: 'X-Web',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.x-Web.vercel.app/',
    title: 'X-Web | Agence de Développement Web',
    description: 'X-Web est une agence spécialisée dans le développement web, l\'optimisation SEO et la formation numérique.',
    siteName: 'X-Web',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X-Web | Agence de Développement Web',
    description: 'X-Web est une agence spécialisée dans le développement web, l\'optimisation SEO et la formation numérique.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          
            <Header />
            <main className="flex-grow mt-16">{children}</main>
            <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  );
}