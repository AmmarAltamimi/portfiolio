import aboutIm from '../image/about.jpg'
import { motion } from "framer-motion"

function About() {
  return (
          <div id="about" className="border-b border-neutral-900 pb-4">
        <div className="container mx-auto px-10 pb-32 pt-10   text-white" >
            <motion.h2  initial={{opacity:0, y:-100}} whileInView={{opacity:1 , y:0}} transition={{ duration:1 }} className='text-4xl text-center pb-10'>About <span className='text-neutral-500'> Me</span></motion.h2>
          <div className=" flex flex-col gap-10 justify-center items-center lg:flex-row ">
          <motion.div  initial={{opacity:0, x:-100}} whileInView={{opacity:1 , x:0}} transition={{ duration:1.5}} className=" w-[400px] "><img src={aboutIm} alt="" className='w-full rounded-md' /></motion.div>
          <div className="text-white  lg:w-1/2">
              <motion.p initial={{opacity:0, x:100}} whileInView={{opacity:1 , x:0}}  transition={{ duration:1.5}} >
              `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
              </motion.p>
            </div>
          </div>

        </div>
        </div>
      );
}

export default About
