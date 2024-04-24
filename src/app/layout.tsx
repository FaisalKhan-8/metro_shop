import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/customs/theme-provider';

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
