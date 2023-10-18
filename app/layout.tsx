import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "JiaCheng's Portfolio",
  description: 'JiaCheng is a front-end developer with 2 years of experience with',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 pt-28`}>
        {/* <div
          className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] 
          h-[31.25rem] w-[31.25rem] 
          rounded-full blur-[10rem] sm:w-[68.75rem]'
        ></div>
        <div
          className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] 
    h-[31.25rem] w-[31.25rem] 
    rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'
        ></div> */}
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
