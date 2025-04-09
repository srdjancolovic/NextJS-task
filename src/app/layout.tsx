import '../styles/globals.scss';

import Footer from '@/layout/footer/footer';
import Header from '@/layout/header/header';
import type { Metadata } from 'next';
import { hostGrotesk } from '@/components/fonts/fonts';

export const metadata: Metadata = {
    title: 'IT Family Test Task - Srdjan Colovic',
    description: 'Meta description',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={hostGrotesk.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
