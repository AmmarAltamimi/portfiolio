import {  motion } from "framer-motion"
import Lottie from "lottie-react";
import developerAnimation from '../animation/develpor.json'

let str = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications, I have honed my skills in front-end technologies like Html , Css , Tailwind , JavaScript , TypeScript , React and Next.js, as well as back-end technologies like Node.js , Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


const grandVariants = {
  hidden:{},
  visible:{transition:{ staggerChildren:0.5 , when:"beforeChildren"}}
}

const Child1aAnd2dVariants = {
  hidden:{opacity:0, x:-100},
  visible:{opacity:1 , x:0,transition:{  duration:1}}
}

const Child3Variants = {
  hidden:{opacity:0, x:-100},
  visible:{opacity:1 , x:0,transition:{ duration:1, staggerChildren:0.03 , when:"beforeChildren"}}
}

const NestedFrom3renVariants = {
  hidden:{opacity:0,},
  visible:{opacity:1 ,transition:{duration:1 }}
}

// const CVariants = {
//   hidden:{opacity:0,},
//   visible:{opacity:1 ,transition:{ staggerChildren:0.03 , delay:2, when:"beforeChildren"}}
// }

// const ChlidrenVariants = {
//   hidden:{opacity:0,},
//   visible:{opacity:1 ,transition:{duration:1 }}
// }

function Hero() {
  return (
    <div  className="border-b border-neutral-900 pb-4">
    <div className="container mx-auto px-10 py-36  ">
      <div className="flex flex-col gap-10 lg:flex-row lg:item-center">
        <motion.div   variants={grandVariants} initial="hidden" whileInView="visible"  className="text-white lg:w-1/2 ">
          <motion.h2    variants= {Child1aAnd2dVariants} className="text-4xl text-neutral-300 pb-10 font-thin tracking-tight  ">Ammar Altamimi</motion.h2>
          <motion.div   variants= {Child1aAnd2dVariants} className="text-2xl pb-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight">
            Full Stack develpoer
          </motion.div>
          <motion.p  variants={Child3Variants}  >
            {str.split("").map((letter,index)=>(
              <motion.span key={index} variants={NestedFrom3renVariants} >{letter}</motion.span>
            ))}
          </motion.p>
        </motion.div>
        <div className=" flex justify-center items-center">
        <Lottie className="w-[600px] m-w-full " animationData={developerAnimation} />
        </div>
      
      </div>
    </div>
    </div>
  );
}

export default Hero;
