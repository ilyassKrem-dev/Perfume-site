import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { adjustQuantityInCart } from "../Cart-products/Cart_products";

export default function Orders(props: any) {


  function addQuantity(addDec: any, product: any) {
    const newCart = props.cartProducts.map((item: any) => {
      if (item === product && addDec === "+") {
        return { ...item, quantity: item.quantity + 1 };
      } else if (item === product && addDec === "-" && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    props.setCartProducts(newCart);
  }
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, product: any) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity)) {
        const newCart = props.cartProducts.map((item:any) => {
            if (item === product) {
                return { ...item, quantity: newQuantity };
            } else {
                return item;
            }
        });
        props.setCartProducts(newCart);
    }
};
  
  return (
    <div className="flex flex-col gap-y-4 sm:flex-1">
      <div className="flex w-full flex-col items-center gap-y-4">
        <div className="flex sm:justify-between w-full flex-col sm:flex-row items-center">
          <h2 className=" font-semibold mb-2 sm:mb-0">Cart</h2>
          <Link
            href={"/shop"}
            className="flex items-center text-blue-500 hover:text-blue-900 transition-all duration-300"
          >
            Continue shopping
            <MdKeyboardArrowRight />
          </Link>
        </div>
        <div className="flex">
          <h2 className="font-semibold">
            {props.cartProducts.length} items in Cart
          </h2>
        </div>
        <div className=" border-b-2 w-full border-gray-400 h-1"></div>
      </div>
      <Swiper
        
        spaceBetween={15}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
        }}
        direction={"vertical"}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-[350px] w-full sm:h-[400px]"
      >
        {props.cartProducts.map((item: any, index: any) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex gap-y-4 flex-col sm:flex-row items-center sm:justify-between sm:gap-y-6">
                <div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:gap-x-4">
                    <Image
                        src={"/perfume/" + item.product.thumbnail}
                        alt=""
                        width={100}
                        height={100}
                        className="w-auto rounded-lg h-auto"
                    />
                    <div className="flex flex-col items-center sm:items-start">
                    <h2>{item.product.title}</h2>
                    <p className=" text-gray-600">
                        {item.product.brand}
                    </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                <div className="flex gap-x-4 items-center max-[300px]:flex-col max-[300px]:gap-y-4">
                    <div
                    onClick={() => {
                        props.removeItem(item.product);
                        props.removeItemCart(item.product);
                    }}
                    className=" text-white bg-accent p-[0.49rem] rounded-lg cursor-pointer hover:opacity-70 active:opacity-50 transition-all duration-200"
                    >
                    Remove
                    </div>
                    <div className="relative">
                    <div
                        onClick={() => {
                            addQuantity("+", item);
                            adjustQuantityInCart(item.product.id , 1)
                    }}
                        className="absolute text-3xl cursor-pointer top-[0.2rem] left-2"
                    >
                        +
                    </div>
                    <input
                        type="number"
                        onChange={(e) => handleQuantityChange(e , item)}
                        name="quantity"
                        placeholder="0"
                        value={item.quantity}
                        className="input pl-0 text-center w-[100px] placeholder:text-black/50 text-black font-semibold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div
                        onClick={() => {
                            addQuantity("-", item);
                            adjustQuantityInCart(item , -1)}}
                        className="absolute text-3xl cursor-pointer top-0 right-2"
                    >
                        -
                    </div>
                    </div>
                </div>
                <h2 className=" font-semibold ">
                    {(item.product.price.toFixed(2) * item.quantity).toFixed(2)}
                    $
                </h2>
                </div>
                
              </div>
              <div className="border-b-2 border-gray-200 mt-5"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
