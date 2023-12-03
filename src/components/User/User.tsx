import { activeUsers } from "@/assets/User/Profiles"
import { useEffect, useState} from "react"

import { usePathname , useRouter } from "next/navigation"
import Account from "@/assets/User/Account"
export default function User() {
    const router = useRouter();
    const pathname = usePathname()
    const [check , setCheck] = useState<any[]>([])
    useEffect(() => {
        setCheck(activeUsers)
        if (activeUsers.length === 0 && pathname !== "/user/signin" && pathname !== "/user/registre") {
            router.push("/user/signin");
        }

    }, [activeUsers, pathname, router]);
    
    return (
        <div className={` lg:mb-0 flex items-center max-sm:mt-10 min-h-screen flex-col gap-y-10 lg:flex-row sm:gap-x-5 sm:justify-around`}>
            {check.length !== 0&&<Account />}
        </div>
    )
}