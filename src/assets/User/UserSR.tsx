import { activeUsers } from "@/assets/User/Profiles"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { fadeIn } from "@/varients/variants"
import {motion } from "framer-motion"
import Sr from "./Sr"
export default function UserSR({state}:any) {
    const stateInfo = [
        {name:"Sign in" , path:"/user/signin"},
        {name:"Registre" , path:"/user/registre"}]
    const pathname = usePathname()
    return (
        <div className={` lg:mb-0 flex items-center ${activeUsers.length !== 0 ? "justify-center": "mt-10"} min-h-screen flex-col gap-y-10 lg:flex-row sm:gap-x-5 sm:justify-around`}>
            <motion.div
            variants={fadeIn('down' , 0.3)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col items-center justify-center">
                <h2 className="h2 flex flex-col items-center gap-y-3 ">
                    Welcome
                <span className="text-accent">To</span>
                </h2>
                <Image src={"/Logo.png"} alt="" width={250} priority height={250} className="w-auto h-auto max-[350px]:w-[90%]"/>
            </motion.div>
            <motion.div
            variants={fadeIn('up' , 0.5)} 
            initial="hidden"
            animate="show"
            exit="hidden" 
            className="flex flex-col items-center justify-center pt-10 lg:py-6 gap-y-10 w-[90%] sm:w-[60%] lg:w-[45%] bg-primary/90 text-white rounded-lg p-5">
                <div className="flex gap-x-4">
                    {stateInfo.map((item , index) => {
                        return (
                            <Link key={index} href={item.path} className={`${item.path === pathname && "border-b-4 border-accent text-accent"} hover:opacity-70 transition-all duration-100`}>
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
                <Sr state={state} />
               
            </motion.div>
        </div>

    )
}