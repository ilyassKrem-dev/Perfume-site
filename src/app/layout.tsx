"use client"
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({ 
  subsets: ['latin'],
  weight: ['100' , '200' , '300' , '400' , '500' , '600' , '700' , '800']
})
import Nav from '@/assets/Nav/Nav'
import Header from '@/assets/Header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={sora.className}>
        <Nav />
        <Header />
        {children}        
      </body>
    </html>
  )
}
