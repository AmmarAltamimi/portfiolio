import {PROJECTS} from './data.js'
import { motion } from "framer-motion"


function Project() {
    return (
      <div id="Project" className="border-b border-neutral-900 pb-4">
        <div className="container mx-auto px-10 pb-32  pt-10  text-white" >
        <motion.h2  initial={{opacity:0, y:-100}} whileInView={{opacity:1 , y:0}} transition={{ duration:1 }} className='text-4xl text-center pb-10'>Projects</motion.h2>
        {PROJECTS.map((project,index)=>(
          <div key={index} className="flex flex-col items-center gap-10 md:flex-row md:justify-between  pb-10" >
            <motion.div  initial={{opacity:0, x:-100}} whileInView={{opacity:1 , x:0}} transition={{ duration:1.5}} className="w-1/2 flex justify-center"><img src={project.image} alt="" className='w-[300px] rounded-md ' /></motion.div>
            <motion.div  initial={{opacity:0, x:100}} whileInView={{opacity:1 , x:0}}  transition={{ duration:1.5}} className="md:w-1/2 text-center md:text-start">    
            <h3 className='pb-2 font-bold'>{project.title}  </h3>
            <p className='pb-2 '>{project.description}</p>
            {project.technologies.map((technologie,index)=>(
              <span key={index} className=" inline-block mr-3 mb-3 bg-neutral-800 p-1 rounded-sm text-gray-400">{technologie}</span>
            ))}
            </motion.div>
          </div>
         ))}
        </div>
        </div>
      )
}

export default Project
