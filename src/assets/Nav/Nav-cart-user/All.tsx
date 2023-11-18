import Cartnav from "./Cartnav";
import Usernav from "./Usernav";
export default function Allnav() {
    return (
        <div className="flex gap-x-12">
            <Cartnav/>
            <Usernav />
        </div>
    )
}