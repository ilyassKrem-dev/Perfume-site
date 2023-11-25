
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
            <div className="hidden">
                
            </div>
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
        </div>
    )
}