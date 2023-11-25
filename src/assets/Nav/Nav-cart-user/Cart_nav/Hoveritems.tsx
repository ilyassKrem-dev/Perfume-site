import { removeItem } from "@/assets/Cart/Cart-products/Cart_products"
import Image from "next/image"
import Link from "next/link"

export default function Hoveritems(props:any) {

    const cartProductsSplit = props.Cart_products.slice(0,2)
    return(
        <>
            
            {props.Cart_products.length !== 0 &&
            <div className={`hidden  sm:flex-col absolute ${props.Cart_products.length === 0 ? "-bottom-[3.5rem]":props.Cart_products.length === 1 ? " -bottom-[6.5rem]":props.Cart_products.length === 2 ?"-bottom-[10.5rem]":" -bottom-[13.2rem]"} ${props.Cart_products.length === 0?"right-[4.35rem] p-2":props.Cart_products.length >1?"right-[0.25rem]":"right-[0.3rem]"}  right-12 border border-black/30 bg-white p-2 rounded-lg sm:items-center sm:gap-y-4 group-hover:sm:flex`}>
                    <div className="absolute border-solid border-l-transparent border-l-8 border-b-[8px] border-r-8 border-b-white border-r-transparent -top-[0.48rem] "></div>
                    <div className="border-b-2 border-black">
                        Your items
                    </div>
                    <div className="flex flex-col gap-y-4">
                    {cartProductsSplit.map((item:any,index:any) => {
                        return (
                            <div key={index} className="flex items-center gap-x-4">
                                <Link href={props.Cart.path} className="flex items-center gap-x-4 flex-1">
                                    <Image src={"/perfume/"+item.product.thumbnail} alt="" width={50} height={50} className=" rounded-lg"/>
                                    <div className="flex flex-col  justify-end text-sm flex-1 cursor-pointer w-[90px]">
                                        <h2 className="text-end cursor-pointer">
                                            {item.product.title}
                                        </h2>
                                        <p className="text-black text-end cursor-pointer">
                                            {item.product.price}$
                                        </p>
                                    </div>
                                </Link>
                                <div onClick={() => removeItem(item.product)}
                                className=" bg-red-500 rounded-full px-2 text-center text-white cursor-pointer hover:opacity-70 transition-all duration-300 active:opacity-50">
                                    x
                                </div>
                            </div>
                        )
                    })}
                    
                    </div>
                    {props.Cart_products.length > 2&&<div>
                        <Link href={props.Cart.path} className=" underline cursor-pointer">
                            and <span className=" text-accent">{props.Cart_products.length-2}</span> {props.Cart_products.length === 3 ? "item" : "items"}
                        </Link>
                    </div>}
            </div>}
        </>
    )
}