import { Cart_products } from "@/assets/Cart/Cart-products/Cart_products"
import {usePathname} from "next/navigation"
import Link from "next/link"
import {LuShoppingCart,} from "react-icons/lu"



const Cart ={
    name: "Cart" , path: "/cart" , icon: <LuShoppingCart />,count: 0
}


export default function Cartnav() {
    const pathname = usePathname()
   
    return (
        <div>
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
            <div className="hidden sm:flex absolute -bottom-20 border border-black/30 bg-white p-2 rounded-lg">
                <div>
                   {Cart_products.map((item,index) => {
                    return (
                        <div key={index}>
                            <div >
                                {item.product.brand}
                            </div>

                        </div>
                    )
                   })}
                </div>
            </div> 
        </div>
    )
}