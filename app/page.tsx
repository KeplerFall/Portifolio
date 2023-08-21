"use client"
import Header from '@/components/Header'
import { LanguageContext } from '@/context/Context'
import Image from 'next/image'

export default function Home() {
  return (
    <LanguageContext>
      <main className={`bg-[#160c11] h-[200vh]`} >
        <Header />
      </main>
    </LanguageContext>
  )
}
