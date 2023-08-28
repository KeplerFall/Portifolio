import Image from 'next/image'
import mail from "@/static/Mail-Icon-White-on-Black.svg"
import linedin from "@/static/linkedin.svg"
import phone from "@/static/molumen_phone_icon.svg"
import {Language} from "@/context/Context"
import { useContext } from "react"

export default function ContactMe(){
    const {lang, translate} = useContext(Language)

    return(
        <div>
            <div>
                <p></p>
            </div>
            <div className={`grid grid-cols-2`}>
                <a href="mailto:keplermpereira@gmail.com" className={`flex flex-col items-center justify-center`}>
                    <Image src={mail} height={100} width={100} alt=""/>
                    <p>My Email</p>
                </a>
                <a href="https://www.linkedin.com/in/kepler-miranda-pereira-51382719a/" target='_blank' className={`flex flex-col items-center justify-center`}>
                    <Image src={linedin} height={100} width={100} alt=""/>
                    <p>LinkedIn</p>
                </a>
                <a href="https://www.wa.me/5516994081128"  className={`flex flex-col items-center justify-center`}>
                    <Image src={phone} height={100} width={100} alt="" />
                    <p></p>
                </a>
                <a href="mailto:keplermpereira@gmail.com" className={`flex flex-col items-center justify-center`}>
                    <Image src={mail} height={100} width={100} alt="" />
                    <p></p>
                </a>
            </div>
        </div>
    )
}