import { useEffect, useState } from "react"
import { Profiles , activeUsers , rememberMe,removeRemember } from "@/assets/User/Profiles"
import { useRouter } from 'next/navigation'

export default function Signin() {
    const [dataSign , setDataSign] = useState({
        email:"",password: "" , remember:false})
    const [unsucess , setUnSucess] = useState('')
    const router = useRouter()
    function handleChange(e:any) {
        const input = e.target as HTMLInputElement;
        input.setCustomValidity('');
        const {name , value , type, checked} = e.target
        setDataSign(prev => {
            return {...prev,
            [name]:type === "checkbox" ?checked :value} 
        })
    }
    const handleInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
        const input = event.target;
        if(input.name === "conPassword") {
            input.setCustomValidity(`Please Confirm your password`);
        } else {
            input.setCustomValidity(`Please enter a valid ${event.target.name}`);

        }
      };
    function handleSubmit(e:any) {
        e.preventDefault()
        const EmailCheck = Profiles.find(item => item.info.email === dataSign.email.toLowerCase())
        if (EmailCheck) {
            if (EmailCheck.info.password === dataSign.password) {
               EmailCheck.online = true
               activeUsers.push(EmailCheck);
               router.push("/user")
               if (dataSign.remember) {

                    rememberMe()
               } else {
                    removeRemember()
               }
            } else {
                setUnSucess('Wrong Password')
            }
        } else  {
            setUnSucess('This email is not signed in')
        }
    }
    useEffect(() => {
        const id = setInterval(() => {
            setUnSucess("")
        } , 5000)
    } , [unsucess])
    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-6 items-center">
            <div className="flex flex-col gap-y-5 w-full">
                <input type="email" className="input outline-none text-white focus:ring-0 placeholder:text-white/50 border-t-transparent border-x-transparent border-b-4 border-b-white rounded-none focus:border-b-accent pl-2" placeholder="email" autoComplete="on" value={dataSign.email} name="email" required onInvalid={handleInvalid} onChange={handleChange}/>
                <input type="password" className="input outline-none text-white focus:ring-0 placeholder:text-white/50 border-t-transparent border-x-transparent border-b-4 border-b-white rounded-none focus:border-b-accent pl-2" placeholder="Password" value={dataSign.password} name="password" onChange={handleChange}/>
                <p className={`${unsucess ==="" && "hidden"} text-center text-accent`}>{unsucess}</p>
                <div className="flex gap-x-2 ml-2 items-center">
                    <input type="checkbox" name="remember" id="checkbox" className="appearance-none w-4 h-4 border-2  rounded-sm bg-white
                    mt-1 shrink-0
                    checked:bg-accent checked:border-0 relative peer focus:outline-none 
                    disabled:border-steel-400 disabled:bg-steel-400 cursor-pointer" checked={dataSign.remember} onChange={handleChange}  placeholder="checkbox"/>
                    <svg
                    className="
                    absolute 
                    w-4 h-4 mt-1
                    hidden peer-checked:block pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <label className="text-sm" htmlFor="checkbox">Remember Me</label>
                </div>
            </div>
            <button className="bg-accent rounded-lg py-2 px-16 hover:opacity-70 active:opacity-60 transition-all duration-300">Log in</button>
        </form>
    )
}