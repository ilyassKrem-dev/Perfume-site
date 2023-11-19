import { IoIosMenu } from "react-icons/io";


export default function Nav_menu() {

    return (
        <>
            <div className="text-3xl text-white cursor-pointer hover:text-accent transition-all duration-300 flex sm:hidden">
                    <div className={`flex flex-col items-center`}>
                        <IoIosMenu />
                        <div className="text-sm sm:text-base sm:font-semibold ">Menu</div>
                    </div>
            </div>
        </>
    )
}