import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const lato = Lato({ subsets: ['latin'], weight: ["400", "700"] })

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
      <body className={lato.className}>
        {children}
      </body>
    </html>
  )
}
