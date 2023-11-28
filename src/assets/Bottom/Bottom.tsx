import Link from 'next/link'
import {useState} from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram , FaFacebookF } from "react-icons/fa";
import {  FaXTwitter } from "react-icons/fa6";

const services = [
    {name:"Contact" ,path:'/contact'},
    {name:"FAQ" ,path:'/faq'},
    {name:"Terms & Conditions " ,path:'/terms'}]

const socials = [
    {name:'Instagram', url:'https://www.instagram.com/' , icon:<FaInstagram />},
    {name:'facebook', url:'https://www.facebook.com/' , icon:<FaFacebookF />},
    {name:'X', url:'https://twitter.com/' , icon:<FaXTwitter />}
]
export default function Bottom() {
    const [userEmail, setUserEmail] = useState("")
    function handleChange(e:any) {
        setUserEmail(e.target.value)
    }
    return (
        <footer className=" relative bottom-0 bg-primary/90 p-5">
            <div className="flex flex-col lg:flex-row items-center gap-y-6 lg:justify-between">
                <div className="flex flex-col items-center gap-y-5 lg:flex-1 lg:items-start">
                    <div className="flex items-center flex-col lg:items-start">
                        <h2 className="text-white text-xl font-semibold">Stay Connected</h2>
                        <p className='text-center'>Sign up for offers and updates from Perfume</p>
                    </div>
                    <div className='relative flex flex-col items-center lg:flex-row gap-y-3'>
                        <input className="p-2 pr-24 pl-5 rounded-lg outline-accent max-[350px]:w-[90%] max-[350px]:pr-0" type="email" value={userEmail} autoComplete="on" onChange={handleChange} id="email" placeholder="Enter Your Email..."/>
                        <button className='bg-accent text-white p-2  lg:absolute right-0 hover:opacity-70 active:opacity-60 transition-all duration-200 lg:rounded-r-lg rounded-lg'>Sign Up</button>
                    </div>
                </div>
                <div className='flex flex-col w-full  gap-y-4 lg:flex-row lg:flex-1 lg:justify-end lg:gap-x-12'>
                    <div className='flex flex-col gap-y-2 items-center lg:items-start'>
                        <h2 className='text-white text-xl lg: text-center border-b-4 border-white w-[200px] lg:border-none font-semibold'>Costumer services</h2>
                        <div className='lg:flex lg: flex-row relative'>
                            <div className='absolute w-[0.1rem] h-full bg-white z-0 hidden lg:flex'></div>
                            <div className='flex flex-col items-center gap-y-2 lg:items-start'>
                                {services.map((item,index) => {
                                    return (
                                        <Link target={'_blank'} key={index} href={item.path} className="text-white">
                                            <div className='flex items-center  gap-x-2 group text-center hover:text-accent transition-all duration-200 hover:underline lg:text-start lg:items-start lg:text-lg lg:border-l-2 lg:pl-3 lg:hover:border-l-accent relative z-10 '>
                                                <IoIosArrowForward className=' hidden group-hover:flex lg:hidden lg:group-hover:hidden'/>
                                                {item.name}
                                            </div>
                                        </Link>
                                    )
                                })}
                                
                            </div>

                        </div>
                        <div className='w-full lg:hidden bg-white h-1'></div>
                    </div>
                    <div className='flex flex-col gap-y-6 items-center lg:gap-y-2 lg:items-start'>
                        <h2 className='text-center lg:text-start text-xl text-white border-b-4 border-white w-[120px] lg:border-none font-semibold'>Follow us</h2>
                        <div className='lg:flex lg: flex-row relative'>
                            <div className='absolute w-[0.1rem] h-full bg-white z-0 hidden lg:flex'></div>
                            <div className='flex gap-x-10 lg:flex-col lg:gap-y-5'>
                                    {socials.map((item,index) => {
                                        return (
                                        <Link key={index} target={'_blank'} href={item.url} className="text-2xl lg:text-lg text-white hover:text-accent transition-all duration-200 lg:border-l-2 lg:pl-3 lg:hover:border-l-accent relative z-10">
                                            {item.icon}
                                        </Link>)
                                    })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}