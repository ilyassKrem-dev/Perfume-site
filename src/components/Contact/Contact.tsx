import { useEffect, useState } from "react"
import { fadeIn } from "@/varients/variants"
import {motion} from "framer-motion"
import { LuSend } from "react-icons/lu";

export default function Contact() {
    const [userInfo,setUserInfo] = useState({
        name:"" , email:"",subject:"",message:""
    })
    const [send , setSend] = useState(false)
    function handleChange(e:any) {
        const {name , value} = e.target
        setUserInfo(prev => {
            return {...prev,
                [name]:value}
        })
    }
    
    function handleSubmit(e:any) {
        e.preventDefault()
        setSend(true)
        setUserInfo(prev => {
            return {...prev,name:"",email:"",subject:"",message:""}
        })
    }
    useEffect(() => {
        const id = setTimeout(() => {
            setSend(false)
        } , 5000)
        
    } , [send])
    return (
        <div className="flex items-center justify-center p-5">
            <div className="flex p-5 items-center flex-col gap-y-4">
                <motion.h2 
                variants={fadeIn('up',0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2">Contact us</motion.h2>
                <motion.form
                variants={fadeIn('down',0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                onSubmit={handleSubmit} className="flex flex-col items-center gap-y-4 md:w-[120%]">
                    <div className="flex gap-x-3 md:w-full">
                        <input type="text" className="input focus:ring-accent" autoComplete="on" placeholder="name" onChange={handleChange} name="name" value={userInfo.name}/>

                        <input type="email" autoComplete="on" className="input focus:ring-accent" placeholder="email" onChange={handleChange} name="email" value={userInfo.email}/>
                    </div>
                    <input type="text" className="input focus:ring-accent" placeholder="subject" onChange={handleChange} name="subject" value={userInfo.subject}/>
                    <textarea name="message" id="message"  className="textarea focus:ring-accent" onChange={handleChange} value={userInfo.message} placeholder="message"></textarea>
                    <button type="submit" className="btn flex items-center gap-x-4 bg-accent p-4 rounded-lg text-white font-semibold text-lg px-10 hover:opacity-80 hover:bg-accent/80  active:opacity-6 transition-all duration-300 md:px-20">
                        <div>
                            Send
                        </div>
                        <div>
                            <LuSend />
                        </div>
                    </button>
                </motion.form>
                {send&&<div className=" text-amber-900 font-semibold text-lg mt-5">
                    Your message is sent
                </div>}
            </div>
        </div>
    )
}