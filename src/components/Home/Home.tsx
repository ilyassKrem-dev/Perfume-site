import Products from "@/assets/Products/Products"
import Home_nav from "@/assets/Home/Home_nav"
import Sort_filter from "@/assets/Home/Sort_filter"
export default function Homemain() {
    const data = Products()
    /*if (data.length > 0) {
        console.log(data)
    }*/
    return (
        <div className="p-5">
            <Home_nav />
            <Sort_filter />
            <div>
                Hello
            </div>
        </div>
    )
}