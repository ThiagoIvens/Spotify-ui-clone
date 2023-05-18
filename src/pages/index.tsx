import Image from 'next/image'
import { Inter } from 'next/font/google'
import Aside from '@/components/Aside'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-screen bg-zinc-900 text-zinc-400 gap-3 px-1 pt-1'>
      <Aside />
      <Main />
      <Footer />
    </main>
  )
}
