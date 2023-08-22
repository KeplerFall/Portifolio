"use client"
import AboutMe from '@/components/AboutMe'
import Header from '@/components/Header'
import ContactMe from '@/components/ContactMe'
import { LanguageContext } from '@/context/Context'
import Image from 'next/image'

export default function Home() {
  return (
    <LanguageContext>
      <main className={`bg-[#160c11] h-[200vh]`} >
        <Header/>
        <AboutMe />
        <ContactMe />
      </main>
    </LanguageContext>
  )
}