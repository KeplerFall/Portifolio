"use client"
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface Props{
    children: ReactNode;
}

interface ContextReturn{
    lang: string,
    translate: Translate
    setLang: (language: string) => void
}

interface Translate{
    [key: string]: {
        portifolio: string,
        hello: string,
        aboutMe: string,
        aboutMeText: string,
    }
}

const translate: Translate = {
    en:{
        portifolio: "Portfolio",
        hello: "Hello, I'm",
        aboutMe: "About Me",
        aboutMeText: "I've been a Frond end developer since 2021, where I started developing responsive ecommerce websites, participating in big name projects such as Bauducco, Aviator, Coral, among others. I have been working as a freelance developer since January 2023.",
    },
    pt: {
        portifolio: "Portifólio",
        hello: "Iaê, eu sou o",
        aboutMe: "Sobre Mim",
        aboutMeText: "Sou desenvolvedor Frond end desde 2021, onde comecei a desenvolver sites responsivos voltados ao ecommerce, participando de projetos com grande nome, como Bauducco, Aviator, Coral entre outros. Trabalho como desenvolvedor freelancer desde janeiro de 2023."
    },
    de:{
        portifolio: "Portfolio",
        hello: "Hallo, Ich bin",
        aboutMe: "Über mich",
        aboutMeText: "Ich bin seit 2021 Frond-End-Entwickler, wo ich mit der Entwicklung responsiver E-Commerce-Websites begann und an namhaften Projekten wie Bauducco, Aviator, Coral und anderen beteiligt war. Seit Januar 2023 arbeite ich als freiberuflicher Entwickler",
    }
}
const changeLanguage = (language: string )=>{
}

export const Language = createContext<ContextReturn>({lang: "en", translate: translate, setLang: changeLanguage})

export function LanguageContext({children} : Props){
    const [lang, setLang] = useState<string>("en")

    const changeLanguage = (language: string )=>{
        setLang(language)
    }
    return(
        <Language.Provider value={{lang, translate, setLang}}>
            {children}
        </Language.Provider>
    )
}
