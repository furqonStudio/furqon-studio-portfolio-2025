import type { Metadata } from 'next'
import { Gasoek_One, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const gasoek = Gasoek_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gasoek',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gasoek.variable} bg-black`}>
        {children}
      </body>
    </html>
  )
}
