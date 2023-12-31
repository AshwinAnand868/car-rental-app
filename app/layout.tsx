import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs'
import NavBar from '@/app/NavBar/NavBar'

const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
            <NavBar />
            {children}
        </body>
      </html>
    </ClerkProvider>  
  )
}
