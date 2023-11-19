import Image from "next/image"
import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5";
function Header() {


    return (
        <div className="flex items-center justify-center sm:justify-start flex-col">
            <div className="p-10 flex flex-col sm:flex-row sm:justify-between w-full items-center ">
                <Link href={'/'}>
                    <Image src={"/logo.png"} width={200} priority={true} height={200} alt="Logo" className="w-auto h-auto"/>
                </Link>
                <div className="mt-10 sm:mt-0 relative">
                    <input className="input w-[300px] sm:w-[400px] pl-12 outline-brow focus:ring-amber-900" type="text"  placeholder="Search"/>
                    <div className="absolute top-[0.3rem] left-[0.3rem] text-3xl cursor-pointer border-r-2 pr-1 hover:text-amber-900">
                        <IoSearchOutline />
                    </div>
                </div>
                
            </div>
            <div className="border-b-2 w-[93%]"></div>
        </div>
    )
}

export default Header