import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import { SupabaseProvider } from '@/providers/SupabaseProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lunaway',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  )
}
