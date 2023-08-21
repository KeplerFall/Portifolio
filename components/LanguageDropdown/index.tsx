'use client'
import { Language } from "@/context/Context"
import { Image } from "next/dist/client/image-component"
import { useContext, useEffect, useState } from "react"
import brImage from "../../static/br-flag.png"
import enImage from "../../static/us-flag.png"
import deImage from "../../static/gm-flag.png"
import { StaticImageData } from "next/dist/shared/lib/get-img-props"

export default function LanguageDropdown(){
    const {lang, setLang} = useContext(Language)
    const [isOpen, setOpen] = useState(false)

    const currentLanguage = ()=>{
        switch(lang){
            case "en": return "English"
            case "pt": return "Português"
            case "de": return "Deutsch"
        }
        return "en"
    }

    const currentFlag = ():StaticImageData =>{
        switch(lang){
            case "en": return enImage
            case "pt": return brImage
            case "de": return deImage
        }
        return enImage
    }



    
    return(
        <div className={`cursor-pointer bg-gradient-to-br from-[#FF69B4] to-[#984ca5] w-fit h-fit px-[2px] py-[2px] ${isOpen ? `rounded-lg` : `rounded-full`}`} onClick={()=>{setOpen(isOpen? false : true)}}>
            <div className={`grid grid-cols-1 gap-3 bg-[#212121] ${isOpen ? `rounded-lg` : `rounded-full`} px-4 py-2`}>
                <div className={`flex gap-2`}>
                    <Image className="rounded-lg" src={currentFlag()} height={20} width={40} alt={`Current Flag`}/>
                    {currentLanguage()}
                </div>
                <div className={`${!isOpen ? `hidden` : null} flex flex-col gap-3`}>
                    {lang != "pt" ? <div className={`flex gap-2`} onClick={()=> setLang("pt")}><Image className="rounded-lg" src={brImage} height={20} width={40} alt="Brazilian Logo" /> Português</div> : ""}
                    {lang != "en" ? <div className={`flex gap-2`} onClick={()=> setLang("en")}><Image className="rounded-lg" src={enImage} height={20} width={40} alt="United States Logo" /> English</div> : ""}
                    {lang != "de" ? <div className={`flex gap-2`} onClick={()=> setLang("de")}><Image className="rounded-lg" src={deImage} height={20} width={40} alt="German Logo" /> Deutsch</div> : ""}
                </div>
            </div>
        </div>
    )
}