
import {usePathname} from "next/navigation"
import Link from "next/link"
import {ImUser} from "react-icons/im";
const User ={
    name: "User" , path: "/user" , icon: <ImUser />
}


export default function Usernav() {
    const pathname = usePathname()

    return (
        <>
            <Link href={User.path} className='text-2xl text-white'>
                    <div className={`${User.path === pathname && 'text-accent font-semibold'} flex flex-col items-center hover:text-accent transition-all duration-300`}>
                        <div className="">
                            {User.icon}
                        </div>
                        <div className="text-sm sm:hidden">
                            {User.name}
                        </div>
                    </div>
            </Link> 
        </>
    )
}