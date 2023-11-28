import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image"

import Products from "../Products/Products";
import Overlay from "../Overlay/Overlay";
import { useState ,useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function Searchbar() {
    const [userInput , setUserInput] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [selectedDiv, setSelectedDiv] = useState(-1)
    const maxResults = 5;
    const Itemhieght = 90;
    
    useEffect(() => {
        function hide(e:any) {
            if (!e.target.closest('.search-bar-container')) {
                setShowResults(false);
            }
        }
    
        document.addEventListener('click', hide);
    
        return () => {
            document.removeEventListener('click', hide);
        };
    }, [showResults]);
    function handleChange(e:any) {
        
        setShowResults(true)
        const input = e.target.value
        setUserInput(input)
    }
    const filterdProducts = userInput.trim() !== ""
    ? Products.filter((item) => {
        const productName = item.title.toLowerCase();
        const brandName = item.brand.toLowerCase();
        const userInputLowerCase = userInput.toLowerCase();

        return productName.includes(userInputLowerCase) || brandName.includes(userInputLowerCase);
    })
    : Products.slice().sort(() => Math.random() - 0.5);
    
    const limitedResults = filterdProducts.slice(0 , maxResults)
    const containerHeight = Math.min(limitedResults.length * Itemhieght, 300);
    const itemsFilterd = useMemo(() => {
        return limitedResults.map((item,index) => {
            const isSelected = selectedDiv === index
            return (
                <div key={index} className="w-full">
                    <div 
                    className="flex flex-col items-center justify-between w-full  hover:opacity-70 transition-all duration-200 relative ">
                        <div
                        onClick={() => {setSelectedDiv(index)}} 
                        className="flex items-center justify-between w-full cursor-pointer">
                            <Image src={"/perfume/"+item.thumbnail} alt="perfume" width={50} height={50} className="rounded-lg w-auto h-auto"/>
                            <div className="flex flex-col items-end gap-y-1">
                                <h4 className="text-sm cursor-pointer">{item.title}</h4>
                                <p className="text-gray-400 text-sm cursor-pointer">{item.brand}</p>
                                <p className="text-gray-500 text-sm cursor-pointer">{item.price}$</p>
                            </div>
                        </div>
                        {index !== limitedResults.length -1&&<div className="h-2 w-full border-b-2 border-gray-400 mt-2"></div>}
                    </div>
                    {isSelected&&<Overlay setSelectedImage={setSelectedDiv} item={item}/>}  
                </div>
            )
        })
    } , [limitedResults])
    return (
        <div className="mt-10 lg:mt-0 relative search-bar-container">
            <input 
            className="input w-[300px] sm:w-[400px] pl-12 outline-brow focus:ring-amber-900 max-[300px]:w-[250px]" id="search"
            type="text"
            autoComplete="off" 
            placeholder="Search"
            value={userInput}
            onClick={() => {userInput.length > 0&&setShowResults(true)}}
            onChange={handleChange}/>
            <div className="absolute top-[0.3rem] left-[0.3rem] text-3xl cursor-pointer border-r-2 pr-1 hover:text-amber-900">
                <IoSearchOutline />
            </div>
            <AnimatePresence>
                {showResults&& limitedResults.length >0&&
                <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }} 
                style={{ height: `${containerHeight}px` }}
                className={`absolute -bottom-26 text-black bg-white input  right-0 items-center flex flex-col gap-y-4  p-2 overflow-y-scroll z-40`}>
                    {itemsFilterd}
                </motion.div>}
            </AnimatePresence>
        </div> 
    )
}