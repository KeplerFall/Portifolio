import { Language } from "@/context/Context"
import { useContext } from "react"

export default function AboutMe(){
    const {lang, translate} = useContext(Language)
    return(
        <section className={`mt-[85px] w-[90%] mx-auto flex flex-col items-center py-4`}>
            <div className={`text-center`}>
                <p className={`text-[3rem] font-bold`}>{translate[lang].hello}</p>
                <p className={`text-[2.6rem] text-[#FF69B4] `}>Képler Miranda :)</p>
                <p className={`text-[#828282] font-bold`}>Front End Developer</p>
            </div>
            <div className={`mt-8`}>
                <p className={`text-center text-xl font-bold`}>{translate[lang].aboutMe}</p>
                <p className={`text-[#c2c2c2] text-justify`}>{translate[lang].aboutMeText}</p>
            </div>
        </section>
    )
}