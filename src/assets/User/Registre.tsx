import { useEffect, useState } from "react"
import { Profiles ,addtoprofiles } from "@/assets/User/Profiles"
import { useRouter } from 'next/navigation'
import { nanoid } from "nanoid"
export default function Registre() {
    const router = useRouter()
    const [dataReg , setDataReg] = useState({
        name:'',email:"",password: "",conPassword:"",
        newsLetter:true
    })
    const [alreadyReg,setAlreadyReg] = useState(false)
    const [match , setMatch] = useState("")
    function handleChange(e:any) {
        const input = e.target as HTMLInputElement;
        input.setCustomValidity('');
        const {name , value ,type, checked} = e.target
        setDataReg(prev => {
            return {...prev,
            [name]:type==='checkbox' ? checked:value} 
        })
    }
    

    function handleSubmit(e:any) {
        e.preventDefault()
        const existingProfile = Profiles.findIndex(
            (profile) => profile.info.email === dataReg.email
          );
        if (dataReg.password !== dataReg.conPassword) {
            setMatch("Passwords dont match")
        }else if (dataReg.password.length < 8) {
            setMatch("Password should be at least 8 characters long")
        } else if (existingProfile !== -1) {
            setAlreadyReg(true);
        } else {
            
            addtoprofiles({
                id: nanoid(),
                name:dataReg.name , 
                email:dataReg.email,
                password:dataReg.password,
                newsLetter:dataReg.newsLetter,
                avatar:"/default.png"
            })
            router.push("/user/signin")
        }
    }
    const handleInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
        const input = event.target;
        if(input.name === "conPassword") {
            input.setCustomValidity(`Please Confirm your password`);
        } else {
            input.setCustomValidity(`Please enter a valid ${event.target.name}`);

        }
      };
      
    useEffect(() => {
        const id = setInterval(() => {
            setAlreadyReg(false)
        } , 5000)
    } , [alreadyReg])
    useEffect(() => {
        const id = setInterval(() => {
            setMatch("")
        } , 50000)
    } , [match])
    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-6 items-center">
            <div className="flex flex-col gap-y-5 w-full">
                <input type="text" className="input outline-none text-white focus:ring-0 placeholder:text-white/50 border-t-transparent border-x-transparent border-b-4 border-b-white rounded-none focus:border-b-accent pl-2" placeholder="name" required onInvalid={handleInvalid}  autoComplete="on" value={dataReg.name} name="name" onChange={handleChange}/>
                <input type="email" required onInvalid={handleInvalid}  className="input outline-none text-white focus:ring-0 placeholder:text-white/50 border-t-transparent border-x-transparent border-b-4 border-b-white bg-transparent rounded-none focus:border-b-accent pl-2" placeholder="email" autoComplete="on" value={dataReg.email} name="email" onChange={handleChange}/>
                <input required onInvalid={handleInvalid} type="password" className="input outline-none text-white focus:ring-0 placeholder:text-white/50 border-t-transparent border-x-transparent border-b-4 border-b-white rounded-none focus:border-b-accent pl-2" placeholder="Password" value={dataReg.password} name="password" onChange={handleChange}/>
                <input required onInvalid={handleInvalid} type="password" className="input outline-none text-white focus:ring-0 placeholder:text-white/50 border-t-transparent border-x-transparent border-b-4 border-b-white rounded-none focus:border-b-accent pl-2" placeholder="Confirm Password" value={dataReg.conPassword} name="conPassword" onChange={handleChange}/>
                <p className={`${match ==="" && "hidden"} text-center text-accent`}>{match}</p>
                <div className="flex gap-x-2 ml-2 items-center">
                    <input type="checkbox" name="newsLetter" id="checkbox" className="appearance-none w-4 h-4 border-2  rounded-sm bg-white
                    mt-1 shrink-0
                    checked:bg-accent checked:border-0 relative peer focus:outline-none 
                    disabled:border-steel-400 disabled:bg-steel-400 cursor-pointer" checked={dataReg.newsLetter} onChange={handleChange}  placeholder="checkbox"/>
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
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <label className="text-sm" htmlFor="checkbox">Subscribe to Newsletter</label>
                </div>
            </div>
            {alreadyReg&&<p className="text-accent">This email already registered</p>}
            <button type="submit" className="bg-accent rounded-lg py-2 px-16 hover:opacity-70 active:opacity-60 transition-all duration-300">Registre</button>
        </form>
    )
}