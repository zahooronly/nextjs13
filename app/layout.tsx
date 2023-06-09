"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
// import { useRef } from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      	<title>Chakra-UI Templates</title>
      </head>
      <body>
        <ChakraProvider>
          <Navbar/>
        {children}
        <Footer/>
        </ChakraProvider>
        </body>
    </html>
  )
}
