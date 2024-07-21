import {EXPERIENCES} from './data.js'
import { motion } from "framer-motion"

function Experience() {
  return (
    <div id="Experience" className="border-b border-neutral-900 pb-4">
    <div className="container mx-auto px-10 pb-32 pt-10  text-white" >
    <motion.h2  initial={{opacity:0, y:-100}} whileInView={{opacity:1 , y:0}} transition={{ duration:1 }} className='text-4xl text-center pb-10'>Experience</motion.h2>
    {EXPERIENCES.map((experience,index)=>(
      <div key={index} className="flex flex-col gap-5 md:flex-row md:items-center pb-10" >
        <motion.h3  initial={{opacity:0, x:-100}} whileInView={{opacity:1 , x:0}} transition={{ duration:1.5}} className="text-1xl  w-1/2 md:text-center">{experience.year}</motion.h3>
        <motion.div  initial={{opacity:0, x:100}} whileInView={{opacity:1 , x:0}}  transition={{ duration:1.5}} className="md:w-1/2">    
        <h3 className='pb-2 font-bold'>{experience.role} -{experience.company} </h3>
        <p className='pb-2 '>{experience.description}</p>
        {experience.technologies.map((technologie,index)=>(
          <span key={index} className=" inline-block mr-3 bg-neutral-800 p-1 rounded-sm text-gray-400 mb-2">{technologie}</span>
        ))}
        </motion.div>

      </div>
     ))}
    </div>
    </div>
  )
}

export default Experience
