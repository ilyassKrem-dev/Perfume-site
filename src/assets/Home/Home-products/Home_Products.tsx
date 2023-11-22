import Image from "next/image";
import { useEffect } from "react";

export default function Home_Products(props: any) {
    function handleCloseClick(e: any) {
  
        props.setSelectedImage(-1);
    }
    useEffect(() => {
        function handleOutsideClick(event: any) {
          const overlay = document.querySelector(".bg-white");
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
    <>
      {props.productsToShow.map((item: any, index: any) => {
        const isSelected = props.selectedImage === index;
        const hoverClass = isSelected ? "hover:opacity-100" : "hover:opacity-70";
        return (
          <div
            key={index}
            onClick={() => props.setSelectedImage(index)}
            className={`flex mt-6 flex-col ${hoverClass}`}>
            <div className="relative ">
              <Image
                src={"/perfume/" + item.thumbnail}
                priority={true}
                alt=""
                width={200}
                height={200}
                className=" rounded-lg lg:w-auto lg:h-auto cursor-pointer"
              />
              {isSelected && (
                <div  className="fixed top-0 left-0 w-[100%] h-screen bg-black/80 flex justify-center items-center z-50 overflow-y-scroll ">
                  <div className="bg-white w-[70%] h-[75%] rounded-lg flex flex-col items-center p-5 relative justify-evenly lg:flex-row lg:items-center lg:h-[55%]  xl:justify-around xl:w-[60%] md:h-[55%] overflow-y-scroll">
                    
                    <Image src={"/perfume/" + item.thumbnail} alt="" width={270} height={270}
                    className=" rounded-lg"/>
                    <div className="flex flex-col items-center mt-2 justify-around flex-1 lg:h-[65%] lg:mr-10 xl:mr-0">
                        <div>
                            <h2 className="h2 text-2xl text-center mb-2">{item.title}</h2>
                            <p className="text-black font-normal text-center">{item.description}</p>
                        </div>
                        <div className="">
                            <p className="text-black text-center font-semibold">
                                Price: {item.price} $
                            </p>
                            <button className=" bg-primary/80 text-white p-4 px-8 rounded-lg  hover:text-accent hover:opacity-80 transition-all duration-300 mt-4 max-[320px]:px-6 xl:px-24">
                                Add to cart
                            </button>
                        </div>

                    </div>
                    <div onClick={handleCloseClick} className="absolute top-[0.1rem] right-1 font-bold text-xl cursor-pointer hover:opacity-70 transition-all duration-150">
                        X
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center mt-4">
              <div className="mb-4 flex items-center flex-col">
                <h3 className="text-black font-semibold">{item.title}</h3>
                <p className=" text-gray-400 font-semibold text-center">
                  {item.brand}
                </p>
              </div>
              <p className="text-black font-semibold">From {item.price}$</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
