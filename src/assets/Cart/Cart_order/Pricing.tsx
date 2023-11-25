

export default function Pricing(props:any) {

    const totalPrice:any = props.cartProducts.reduce((sum:any,item:any) => {
        return sum + item.product.price * item.quantity
    } , 0)
    const Shipping = totalPrice === 0 ? 0 : 50

    return (
        <>
            <div className="flex flex-col sm:flex-1 gap-y-5">
                    <div className="flex flex-col gap-y-3">
                        <div className="flex justify-between">
                            <h2 className=" font-semibold text-xl max-[300px]:text-base">Pricing details</h2>
                            <p className=" text-gray-500 text-xl max-[300px]:text-base">{props.cartProducts.length} {props.cartProducts.length <=1?"item":"items"}</p>
                        </div>
                        <div className=" bg-gray-100/50 p-2 px-5 py-4 text-gray-500 rounded-xl flex flex-col text-sm gap-y-2">
                            <div className="flex justify-between items-center gap-y-4">
                                <p className="text-gray-500">Subtotal</p>
                                <p className="text-gray-500">{totalPrice.toFixed(2)}$</p>    
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-500">Shipping</p>
                                <p className="text-gray-500">{Shipping}$</p>    
                            </div>
                            <div className="border-b-2 border-gray-500"></div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-black font-semibold text-xl max-[300px]:text-base">Total</h2>
                                <p className="text-black text-xl font-semibold max-[300px]:text-base">{(totalPrice+Shipping).toFixed(2)}$</p>    
                            </div>
                        </div>
                    </div>
                    <button className=" bg-blue-500 text-white rounded-lg p-3">Place Order</button>   
                </div>
        </>
    )
}