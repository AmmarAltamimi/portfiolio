import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import {  motion } from "framer-motion"


const CVariants = {
  hidden:{x:-100},
  visible:{x:0 ,transition:{ duration:1.5, staggerChildren:0.5 , when:"beforeChildren"}}
}


const ChlidrenVariants = {
  hidden:{y:-20,},
  visible:{y:0 ,transition:{duration:1.5, repeat:Infinity , repeatType:"reverse" }}
}


function Technologies() {
   return (
    <div id="Technologies" className="border-b border-neutral-900 pb-4">
    <div className="container mx-auto px-10 pb-32 pt-10   text-white" >
      <motion.h2  initial={{opacity:0, y:-100}} whileInView={{opacity:1 , y:0}} transition={{ duration:1 }} className='text-4xl text-center pb-10'>Technologies</motion.h2>
<motion.ul   variants={CVariants}  initial="hidden" whileInView="visible"  className="flex justify-center gap-5  ">
    <motion.li  variants={ChlidrenVariants} className="text-5xl text-pink-700 border-4 border-neutral-800 p-1 rounded-md"><FaHtml5/></motion.li>
    <motion.li  variants={ChlidrenVariants}  className="text-5xl text-sky-500  border-4 border-neutral-800 p-1 rounded-md"><FaCss3/></motion.li>
    <motion.li  variants={ChlidrenVariants}  className="text-5xl text-yellow-400  border-4 border-neutral-800 p-1 rounded-md"><RiJavascriptFill/></motion.li>
    <motion.li  variants={ChlidrenVariants}  className="text-5xl text-sky-500 border-4 border-neutral-800 p-1 rounded-md"><BiLogoTypescript/></motion.li>
    <motion.li  variants={ChlidrenVariants} className="text-5xl text-sky-500  border-4 border-neutral-800 p-1 rounded-md"><FaReact/></motion.li>
    
</motion.ul>

    </div>
    </div>
  );
}

export default Technologies
