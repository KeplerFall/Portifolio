"use client"
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface Props{
    children: ReactNode;
}

interface Translate{
    [key: string]: {
        portifolio: string,
    }
}

interface ContextReturn{
    lang: string,
    translate: Translate
    setLang: (language: string) => void
}

const translate: Translate = {
    en:{
        portifolio: "Portfolio"
    },
    pt: {
        portifolio: "Portifólio"
    },
    de:{
        portifolio: "Portfolio"
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
