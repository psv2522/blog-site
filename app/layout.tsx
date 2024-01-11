import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from "@/components/theme-provider"
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex flex-col max-w-2xl mx-auto px-4 justify-between h-screen'>
          <Navbar/>
            {children}
            <Footer/>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
