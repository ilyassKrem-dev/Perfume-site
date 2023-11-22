

import Contacthome from "./Contacthome";
import Allnav from "./Nav-cart-user/All";
import Nav_shop from "./Nav_shop";
export default function Nav() {
    return (
        <div className=" bg-primary/80 w-full fixed bottom-0 sm:sticky z-40">
            <div className="flex p-3 items-center justify-center gap-x-8 sm:justify-between sm:mx-4 max-[350px]:gap-x-3">
                <div className="flex">
                    <Contacthome/>
                    <div className="hidden sm:flex ml-10">
                        <Nav_shop />
                    </div>
                </div>
                <div className="sm:hidden">
                    <Nav_shop />
                </div>
                <Allnav />
                
            </div>
        </div>
    )
}