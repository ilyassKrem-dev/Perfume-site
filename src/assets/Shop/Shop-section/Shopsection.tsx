import { useState } from "react"
import Shop_Products from "@/assets/Shop/Shop-products/Shop_Products"
import {motion} from 'framer-motion'
export default function Shopsection(props:any) {
    const [showAll , setShowAll] = useState(false)
    
    const [selectedImage, setSelectedImage] = useState(-1)

    const productsToShow = showAll ? props.filteredProducts: props.filteredProducts.slice(0,6)
    function handleClick() {
        setShowAll(prev => !prev)
    }

    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      };
    return (
        <>
            <motion.div
            initial="hidden" 
            animate="visible" 
            variants={fadeVariants}
            className="grid grid-cols-2 gap-x-6 justify-items-center sm:grid-cols-3 lg:gap-x-12">
                <Shop_Products 
                productsToShow={productsToShow}
                setSelectedImage={setSelectedImage}
                selectedImage={selectedImage}/>                    
            </motion.div>
                
            {props.filteredProducts.length > 6&&<div onClick={handleClick} className="mt-10 border-b-2 border-black cursor-pointer hover:opacity-60 transition-all duration-200">
                <div className="text-black font-semibold">
                    {showAll ? "See less": "See more"}
                </div>
            </div> }   
        </>
    )
}