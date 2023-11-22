import Image from "next/image"
import { useEffect} from "react";
import { pushToCart } from "../Cart/Cart-products/Cart_products";

export default function Overlay(props:any) {
   
    function handleCloseClick(e: any) {
        e.stopPropagation()
        props.setSelectedImage(-1);
    }
    useEffect(() => {
        function handleOutsideClick(event: any) {
          const overlay = document.querySelector(".background");
          if (overlay && !overlay.contains(event.target)) {
            handleCloseClick(event);
          }
        }
    
        document.body.addEventListener("click", handleOutsideClick);
    
        return () => {
          document.body.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    
    return (
        <div  className="fixed top-0 left-0 w-[100%] h-screen bg-black/80 flex justify-center items-center z-50 overflow-y-scroll ">
            <div className="background bg-white w-[70%] h-[75%] rounded-lg flex flex-col items-center p-5 relative justify-evenly lg:flex-row lg:items-center lg:h-[48%]  xl:justify-around xl:w-[60%] md:h-[50%] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
            
            <Image src={"/perfume/" + props.item.thumbnail} alt="" width={270} height={270}
            className=" rounded-lg"/>
            <div className="flex flex-col items-center mt-2 justify-around flex-1 lg:h-[65%] lg:ml-10">
                <div>
                    <h2 className="h2 text-2xl text-center mb-2">{props.item.title}</h2>
                    <p className="text-black font-normal text-center">{props.item.description}</p>
                </div>
                <div className="">
                    <p className="text-black text-center font-semibold">
                        Price: {props.item.price} $
                    </p>
                    <button onClick={() => pushToCart(props.item , 1)}
                    className=" bg-primary/80 text-white p-4 px-8 rounded-lg  hover:text-accent hover:opacity-80 transition-all duration-300 mt-4 max-[320px]:px-6 xl:px-24">
                        Add to cart
                    </button>
                </div>

            </div>
            <div onClick={handleCloseClick} className="absolute top-[0.1rem] right-1 font-bold text-xl cursor-pointer hover:opacity-70 transition-all duration-150">
                X
            </div>
            </div>
        </div>
    )
}