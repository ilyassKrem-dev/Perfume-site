
import {usePathname} from "next/navigation"
import Link from "next/link"

import { FaShoppingBag } from "react-icons/fa";

const navInfo = {
        name: "Shop" , path: "/shop" , icon: <FaShoppingBag />
    }

    
export default function Nav_shop() {

    const pathname = usePathname()
    return (
        <>
            <div className="flex gap-x-8 sm:gap-x-12 max-[350px]:gap-x-4">
                <Link  href={navInfo.path} className={`text-2xl text-white`}>
                    <div className={`${navInfo.path === pathname && 'text-accent font-semibold'} flex flex-col items-center hover:text-accent transition-all duration-300`}>
                        <div className="relative sm:hidden">
                            {navInfo.icon}
                        </div>
                        <div className="text-sm sm:text-base sm:font-semibold">
                            {navInfo.name}
                        </div>
                    </div>
                </Link> 
            </div>
        </>
    )
}