import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'getLinked',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-purI text-[#FFF]`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
