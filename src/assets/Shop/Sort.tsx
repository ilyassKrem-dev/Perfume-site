
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown  } from "react-icons/md";
import { HiOutlineArrowNarrowDown,HiOutlineArrowNarrowUp  } from "react-icons/hi";


export default function Sort(props:any) {
    const [showSort , setShowSort] = useState(false)
    const [textShowen , setTextShowen] = useState({
        text:"Sort" , icon:<MdOutlineKeyboardArrowDown />
    })
    function handleSort() {
        setShowSort(prev => !prev)

    }
    function handleSortClick(sorted:string) {
        if (sorted === "down") {
            props.setProducts((prev:any) => {
                return [...prev].slice().sort((item1,item2) => item1.price - item2.price)
            })
            setTextShowen(prev => {
                return {...prev,text:"Price",icon:<HiOutlineArrowNarrowDown/>}
            })
            setShowSort(false)
        } else if (sorted === "up") {
            props.setProducts((prev:any) => {
                return [...prev].slice().sort((item1,item2) => item2.price - item1.price)
            })
            setTextShowen(prev => {
                return {...prev,text:"Price",icon:<HiOutlineArrowNarrowUp/>}
            })
            setShowSort(false)
        } else {
            props.setProducts(props.products)
            setTextShowen(prev => {
                return {...prev,text:"Sort",icon:<MdOutlineKeyboardArrowDown/>}
            })
            setShowSort(false)
        }
    } 
    useEffect(() => {
        function removeSortSelect() {
            setShowSort(false)
        }
        document.addEventListener("click" , removeSortSelect)

        return function() {
            document.removeEventListener('click' , removeSortSelect)
        }
    } , [showSort])
    return (
        <div className="flex mt-8">
            <div className="w-full flex justify-center items-center gap-x-5 sm:justify-end">
                <button  className="flex items-center border border-black/30 bg-transparent p-3 rounded-lg  max-[300px]:p-2  relative gap-x-3">
                    <div onClick={handleSort} className="flex items-center gap-x-2 hover:opacity-70 hover:text-accent transition-all duration-200">
                        <div className=" font-semibold">
                            {textShowen.text}
                        </div>
                        <div className=" text-gray-500 text-2xl">
                            {textShowen.icon}
                        </div>
                    </div>
                    {textShowen.text !== "Sort"&&
                    <div onClick={() => handleSortClick("remove")}
                    className=" text-gray-500 text-2xl hover:text-black transition-all duration-100">
                        x
                    </div>}
                    {showSort&&<div className={`absolute bottom-[-5.9rem] right-[0rem] border bg-white border-black/30 rounded-lg p-3 z-10 flex flex-col ${textShowen.text !== "Sort" && "px-[1.8rem]"}`}>
                        <div onClick={() => handleSortClick("down")}
                        className="flex items-center gap-x-2 hover:text-accent hover:opacity-70 transition-all duration-150">
                            <div className="font-semibold">
                                Price
                            </div>
                            <HiOutlineArrowNarrowDown />
                        </div>
                        <div className=" border-b-2 border-black w-full h-1"></div>
                        <div onClick={() => handleSortClick("up")}
                        className="flex items-center gap-x-2 mt-2 hover:text-accent hover:opacity-70 transition-all duration-150">
                            <div className="font-semibold">
                                Price
                            </div>
                            <HiOutlineArrowNarrowUp />
                        </div>
                    </div>}
                </button>
            </div>
        </div>
    )
}