import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Cart_products , removeItem } from "@/assets/Cart/Cart-products/Cart_products";
import Pricing from "@/assets/Cart/Cart_order/Pricing";
import { useState } from "react";
import Orders from "@/assets/Cart/Cart_order/Orders";
export default function Cart() {
    
    const [cartProducts , setCartProducts] = useState(Cart_products)
      
    
    function removeItemCart(product:any) {
        const updateCart = cartProducts.filter(item => item.product !== product)
        setCartProducts(updateCart)
    }
    
    return(
        <div className="p-4">
            
            {cartProducts.length>0
                ?
            <div className="border-solid border-2 rounded-lg p-4 flex flex-col gap-y-4 xl:flex-row sm:justify-between sm:gap-x-4">
                <Orders 
                cartProducts={cartProducts} 
                removeItemCart={removeItemCart}
                removeItem={removeItem} 
                setCartProducts={setCartProducts}
                />
                <div className="hidden sm:flex border border-gray-500"></div>
                <Pricing 
                cartProducts={cartProducts}
                />
            </div>
                :
            <div className="border-solid border-2 rounded-lg p-4 flex flex-col gap-y-4  justify-center items-center h-[500px]">
                <h2 className="h2 text-2xl">No items in Cart</h2>
                <Link
                href={"/shop"}
                className="flex items-center text-blue-500 hover:text-blue-900 transition-all duration-300 text-xl">
                Go shopping
                <MdKeyboardArrowRight />
                </Link>
            </div>}
        </div>
    )
}