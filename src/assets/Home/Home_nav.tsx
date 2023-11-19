
const navitems = [{
    name:"Women"
},{
    name:"Men"
},{
    name:"New"
}]

export default function Home_nav() {


    return (
        <div className="flex">
            <div className="flex items-center justify-center w-full sm:justify-start  bg-gray-400/40 py-4 ">
                <div className="flex sm:ml-12 gap-x-4 sm:gap-x-8">
                    {navitems.map((item , index) => {
                        return (
                            <div key={index} className="font-semibold cursor-pointer hover:text-accent hover:opacity-70 active:opacity-50 transition-all duration-300 w-[80px] text-center sm:w-full">
                                {item.name}
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}