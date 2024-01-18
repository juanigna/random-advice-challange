import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const inter = Manrope({ subsets: ['latin'], weight: ["800"] })

export const metadata: Metadata = {
  title: 'Advice Generator',
  description: 'Advice Generator | Frontend mentor challange',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
