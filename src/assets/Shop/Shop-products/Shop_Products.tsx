import Image from "next/image";
import Overlay from "../../Overlay/Overlay";

export default function Shop_Products(props: any) {
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
                <Overlay item={item} setSelectedImage={props.setSelectedImage}/>  
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
