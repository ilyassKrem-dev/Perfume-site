
import { IoIosMenu } from "react-icons/io";
import Contacthome from "./Contacthome";
import Allnav from "./Nav-cart-user/All";
export default function Nav() {
    return (
        <div className=" bg-primary/80 w-full fixed bottom-0 sm:sticky">
            <div className="flex p-3 items-center justify-center gap-x-8 sm:justify-between sm:mx-4">
                <Contacthome/>
                <Allnav />
            </div>
        </div>
    )
}