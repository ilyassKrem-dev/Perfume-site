import Link from "next/link"
import HomeSlider from "@/assets/Home/HomeSlider"
import {motion} from "framer-motion"
import { fadeIn } from "@/varients/variants"

import HomeParticles from "@/assets/Home/HomeParticles"
export default function Homemain() {
    

    return (
        <div className="flex items-center justify-center py-12 h-full relative">
            <div className="absolute w-full right-0 bottom-0 h-full  -z-10 ">
                <HomeParticles />
            </div>
            
            <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:justify-around w-full px-12">
                
                <div className="flex flex-col items-center gap-y-4 lg:items-start bg-inherit relative z-10">
                    <motion.h1
                    variants={fadeIn('right',0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden" 
                    className="font-semibold text-xl text-center p-2 lg:text-start sm:p-0"><span className="text-accent text-2xl block sm:text-3xl">Perfume</span> Where Fragrance Becomes Art</motion.h1>
                    <motion.p 
                    variants={fadeIn('right',0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-black/80 text-center font-[500] lg:text-start"><span className=" text-amber-700 text-2xl block
                    ">And</span> every fragrance tells a story.
                     <span className="hidden sm:flex lg:text-start sm:w-[500px] sm:flex-col">
                        <span>Explore our curated collection of scents crafted to inspire,</span>
                         captivate, and define moments.
                    </span>
                    </motion.p>
                    <motion.div
                    variants={fadeIn('up',0.8)}
                    initial="hidden"
                    animate="show"
                    exit="hidden">
                        <Link href={"/shop"} className="lg:flex hidden mt-10">
                            <div    
                            className=" bg-accent text-white p-3 rounded-lg font-semibold hover:opacity-70 active:opacity-60 transition-all duration-200 px-12">
                                Shop now
                            </div>
                        </Link>

                    </motion.div>
                </div>
                <motion.div
                variants={fadeIn('left',0.3)}
                initial="hidden"
                animate="show"
                exit="hidden">
                    <HomeSlider />
                </motion.div>
                <motion.div
                variants={fadeIn('up',0.8)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="lg:hidden">
                    <Link href={"/shop"}>
                        <div className=" bg-accent text-white p-3 rounded-lg font-semibold hover:opacity-70 active:opacity-60 transition-all duration-200 px-10">
                            Shop now
                        </div>
                    </Link>
                </motion.div>
                
            </div>
        </div>
    )
}