'use client'
import { useContext } from "react"
import { Language } from "@/context/Context"
import LanguageDropdown from "../LanguageDropdown"
import MenuDropdown from "../MenuDropdown"

export default function Header(){
    const {lang, translate} = useContext(Language)
    return(
        <header className={`fixed top-0 w-[100%] bg-[#160c11]`}>
            <div className="flex justify-between w-[100%] max-h-[60px] px-2 py-2 mb-6">
                <MenuDropdown />
                <LanguageDropdown />
            </div>
            <div className={`bg-gradient-to-bl from-[#FF69B4] to-[#7a3486] h-[1px]`}>
            </div>
        </header>
    )
}