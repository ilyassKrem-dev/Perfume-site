
import {usePathname} from "next/navigation"
import Link from "next/link"
import {LuShoppingCart,} from "react-icons/lu"
const Cart ={
    name: "Cart" , path: "/cart" , icon: <LuShoppingCart />,count: 0
}


export default function Cartnav() {
    const pathname = usePathname()

    return (
        <>
            <Link href={Cart.path} className='text-2xl text-white'>
                    <div className={`${Cart.path === pathname && 'text-accent font-semibold'} flex flex-col items-center hover:text-accent transition-all duration-300`}>
                        <div className="relative">
                            <div>
                                {Cart.icon}    
                            </div>
                            {Cart.count > 0 && (
                                <div className="absolute rounded-full text-white -top-2 -right-2">
                                    <p className="bg-accent text-white rounded-full text-[10px] px-1 cursor-default">
                                        {Cart.count}
                                    </p>  
                                </div>
                            )}
                        </div>
                        <div className="text-sm sm:hidden">
                            {Cart.name}
                        </div>
                    </div>
            </Link> 
        </>
    )
}