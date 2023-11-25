import Link from "next/link"
import { usePathname } from "next/navigation"
const navitems = [{
    name:"Women",
    path: "/shop/women"
},{
    name:"Men",
    path: "/shop/men"
},{
    name:"New",
    path: "/shop/new"
}]

export default function Shop_nav() {
    const pathname = usePathname()

    return (
        <div className="flex">
            <div className="flex items-center justify-center w-full sm:justify-start  bg-gray-400/40 py-4 ">
                <div className="flex sm:ml-12 gap-x-4 sm:gap-x-8">
                    {navitems.map((item , index) => {
                        return (
                            <Link href={item.path} key={index} className={`font-semibold cursor-pointer hover:text-accent hover:opacity-70 active:opacity-50 transition-all duration-300 w-[80px] text-center sm:w-full max-[300px]:w-full ${item.path === pathname && "text-accent"}`}>
                                {item.name}
                            </Link>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}