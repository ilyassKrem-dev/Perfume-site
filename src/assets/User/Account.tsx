import { activeUsers , deleteProfile ,saveToLocal,removeRemember } from "@/assets/User/Profiles"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function Account() {
    
    const [show , setShow] = useState(false)
    
    const router = useRouter()

    function removeAccount(id:any) {
        deleteProfile(id)
        activeUsers.pop()
        router.push('/user/signin')
        saveToLocal()
    }
    function logOut() {
        activeUsers.pop()
        removeRemember()
        router.push('/user/signin')
    }
    useEffect(() => {
        function handleOutsideClick(event: any) {
          const overlay = document.querySelector(".background-Re");
          if (overlay && !overlay.contains(event.target)) {
            setShow(false);
          }
        }
    
        document.body.addEventListener("click", handleOutsideClick);
    
        return () => {
          document.body.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    useEffect(()=> {
        if (activeUsers.length ===0) {
            router.push('/user')
        }
    } , [activeUsers])
    return (
        
            <>
                <div className="flex flex-col gap-y-8 w-full p-3  sm:w-[50%]">
                    <div className="flex flex-col gap-y-5 justify-center items-center ">
                        <div className="rounded-full relative group bg-white hover:bg-black flex items-center justify-center w-[180px]">
                            <Image src={activeUsers[0].info.avatar} alt="" priority={true} width={150} height={150} className="rounded-full group-hover:opacity-40 transition-all duration-200  w-auto h-auto"/>
                            <input
                            type="file"
                            name="avatar"
                            id="avatar"
                            accept="image/png, image/jpeg"
                            className="absolute inset-0 opacity-0  cursor-pointer"
                            
                            placeholder="Change Image"
                            />
                            <label htmlFor="avatar" className="absolute hidden items-center justify-center text-white/80 cursor-pointer text-center rounded-full   inset-0 group-hover:flex transition-all duration-200 hover:text-white/90">
                                Change avatar
                            </label>
                        </div>
                        <div className="text-center capitalize font-semibold text-xl">
                            {activeUsers[0].info.name}
                        </div>
                    </div>
                    <div className="flex relative flex-col gap-y-7">
                        <button onClick={logOut}
                            className="bg-black text-gray-400 border-2 p-2 rounded-lg hover:bg-amber-800 hover:text-white transition-all duration-200">
                            Logout
                        </button>
                        <button onClick={() => setShow(true)}
                            className="bg-black text-gray-400 border-2 p-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200">
                            Delete account
                        </button>
                        {show&&<div className="fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black/40 flex items-center justify-center ">
                            <div className="bg-white rounded-lg py-5 w-96 px-3 flex flex-col gap-y-8 relative background-Re">
                                <div className="flex flex-col justify-start capitalize">
                                    <h2 className="font-semibold">delete the account</h2>
                                    <h2 className="font-semibold text-accent">Are you sure?</h2>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => removeAccount(activeUsers[0].info.id)}
                                        className="bg-black text-gray-400 border-2 p-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200">
                                        I'm Sure
                                    </button>
                                </div>
                                <div onClick={() => setShow(false)}
                                className="absolute right-2 top-1 cursor-pointer font-semibold text-xl hover:opacity-50 transition-all duration-200">
                                    X
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </>
        
    )
}