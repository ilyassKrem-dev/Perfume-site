import Image from "next/image"
import Link from "next/link"

import Searchbar from "./Searchbar";
function Header() {


    return (
        <div className="flex items-center justify-center sm:justify-start flex-col">
            <div className="p-10 flex flex-col lg:flex-row sm:justify-between w-full items-center ">
                <Link href={'/'}>
                    <Image src={"/logo.png"} width={200} priority={true} height={200} alt="Logo" className="w-auto h-auto"/>
                </Link>
                <Searchbar />
                
            </div>
            <div className="border-b-2 w-[93%]"></div>
        </div>
    )
}

export default Header