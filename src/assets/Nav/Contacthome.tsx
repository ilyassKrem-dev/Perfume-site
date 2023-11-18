
import {usePathname} from "next/navigation"
import Link from "next/link"

import { ImHome3 , ImStack} from "react-icons/im";
const navInfo = [
            {
                name: "Home" , path: "/" , icon: <ImHome3 />
            },
            {
                name: "Contact" , path: "/contact" , icon:<ImStack />
            }
]
    
export default function Contacthome() {

    const pathname = usePathname()
    return (
        <>
            <div className="flex gap-x-12">
                {navInfo.map((item, index) => {
                    return (
                        <Link key={index} href={item.path} className={`text-2xl text-white`}>
                            <div className={`${item.path === pathname && 'text-accent font-semibold'} flex flex-col items-center hover:text-accent transition-all duration-300`}>
                                <div className="relative sm:hidden">
                                    {item.icon}
                                </div>
                                <div className="text-sm sm:text-base sm:font-semibold">
                                    {item.name}
                                </div>
                            </div>
                        </Link> 
                    )
                })}
            </div>
        </>
    )
}