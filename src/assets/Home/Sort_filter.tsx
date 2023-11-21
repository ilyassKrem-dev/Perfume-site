
import { MdOutlineKeyboardArrowDown , MdFilterAlt  } from "react-icons/md";

export default function Sort_filter() {


    return (
        <div className="flex mt-8">
            <div className="w-full flex justify-center items-center gap-x-5 sm:justify-end">
                <button className="flex items-center border border-black/30 bg-transparent p-3 rounded-lg gap-x-2 max-[300px]:p-2 hover:opacity-70 hover:text-accent transition-all duration-200">
                    <div className=" font-semibold">
                        Filter
                    </div>
                    <MdFilterAlt  className=" text-gray-500 text-xl"/>    
                </button>
                <button className="flex items-center border border-black/30 bg-transparent p-3 rounded-lg gap-x-2 max-[300px]:p-2 hover:opacity-70 hover:text-accent transition-all duration-200">
                    <div className=" font-semibold">
                        Sort
                    </div>
                    <MdOutlineKeyboardArrowDown
                    className=" text-gray-500 text-2xl"/>    
                </button>
            </div>
        </div>
    )
}