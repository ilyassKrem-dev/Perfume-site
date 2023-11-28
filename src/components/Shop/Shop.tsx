import Products from "@/assets/Products/Products"
import Shop_nav from "@/assets/Shop/Shop_nav"
import Sort from "@/assets/Shop/Sort"
import { useState } from "react"
import Shopsection from "@/assets/Shop/Shop-section/Shopsection"

interface ShopProps {
    category: string; 
  }
export default function Shop({category}:ShopProps) {


    const [productsInfo , setProductsInfo] = useState(Products)
    let products = productsInfo
    if (category) {
        products = productsInfo.filter(item => item.category.includes(category))
    }
   
    return (
        <div className="p-5">
            <Shop_nav />
            <Sort 
            products={Products} setProducts={setProductsInfo}/>
            <div className="flex justify-center flex-col items-center">
                <Shopsection productsInfo={productsInfo} filteredProducts={products}/>
            </div>
        </div>
    )
}