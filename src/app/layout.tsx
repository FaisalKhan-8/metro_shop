import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/customs/theme-provider';
import Header from '@/components/customs/Header';
import Footer from '@/components/customs/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '700', '400', '300', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Metro Parts',
  description: 'E-commerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
