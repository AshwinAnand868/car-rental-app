import NavBar from '@/app/NavBar/NavBar'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import CartProvider from './provider'

const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rent Smart Cars',
  description: 'This will be your go to place for renting cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CartProvider>
            <NavBar />
            {children}
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>  
  )
}
