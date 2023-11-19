import Cartnav from "./Cartnav";
import Usernav from "./Usernav";
export default function Allnav() {
    return (
        <div className="flex gap-x-12 max-[350px]:gap-x-4">
            <Cartnav/>
            <Usernav />
        </div>
    )
}