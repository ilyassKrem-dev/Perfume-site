import Products from "@/assets/Products/Products"
import Home_nav from "@/assets/Home/Home_nav"
import Sort_filter from "@/assets/Home/Sort_filter"
import { useState } from "react"
import Home_Products from "@/assets/Home/Home-products/Home_Products"
export default function Homemain() {
    const [showAll , setShowAll] = useState(false)
    const [selectedImage, setSelectedImage] = useState(-1)
    const products = Products.filter(item => item.category.includes('women'))
    const productsToShow = showAll ? products: products.slice(0,6)
    console.log(products)
    function handleClick() {
        setShowAll(prev => !prev)
    }
    console.log(selectedImage)
    return (
        <div className="p-5">
            <Home_nav />
            <Sort_filter />
            <div className="flex justify-center flex-col items-center">
                <div className="grid grid-cols-2 gap-x-6 justify-items-center sm:grid-cols-3 lg:gap-x-12">
                    <Home_Products 
                    productsToShow={productsToShow}
                    setSelectedImage={setSelectedImage}
                    selectedImage={selectedImage}/>                    
                </div>
                 
                <div onClick={handleClick} className="mt-10 border-b-2 border-black cursor-pointer">
                    <div className="text-black font-semibold">
                        {showAll ? "See less": "See more"}
                    </div>
                </div>
            </div>
        </div>
    )
}