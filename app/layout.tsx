import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DropdownProvider } from "@/context/DropdownContext"


const inter =  Inter({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: 'Adino Web',
  description: 'Adino Web',
}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DropdownProvider>
        {children}
        </DropdownProvider>
      </body>
    </html>
  )
}
