import Lottie from "lottie-react";
import mailAnimation from '../animation/mail.json'
import { motion } from "framer-motion"
import { IoMdMail } from "react-icons/io";
import { Toaster, toast } from 'sonner'
import Modal from "./Modal";
import { useRef } from 'react';
import { FaCircleExclamation } from "react-icons/fa6";
import { useForm, ValidationError } from '@formspree/react';
import {useEffect} from "react"

const Content = () => {
  const modal = useRef();
  const [state, handleSubmit] = useForm("xjkbgkyr");


  useEffect(()=>{
    if(state?.succeeded){
      toast.success(' Your message has been sent successfully')
    }

  },[state])


  



  return (
    <div id="content" className="border-b border-neutral-900 pb-4">
      <div className="container mx-auto px-10 pb-32 pt-10   text-white">
        <div className="main-heading text-center mb-8">
          <motion.h2 initial={{opacity:0, y:-70}} whileInView={{opacity:1 , y:0}} transition={{ duration:1 }} className="text-4xl flex justify-center items-center gap-x-2"><IoMdMail /><span> Contact Us</span></motion.h2>
          <motion.p initial={{opacity:0, x:-100}} whileInView={{opacity:1 , x:0}} transition={{ duration:1.5}} className="mt-4 text-neutral-400">
           Content us for more information.
          </motion.p>
          <motion.p initial={{opacity:0, x:100}} whileInView={{opacity:1 , x:0}} transition={{ duration:1.5}} className="mt-4 text-neutral-400">
           Get notified when I publish something new.
          </motion.p>
        </div>
      
        <div className="content flex flex-col md:flex-row gap-8  items-center">
          <form className="w-full lg:w-1/2 relative" onSubmit={handleSubmit} >
             <label className={`input  input-bordered flex items-center border-[3px] gap-2 mb-1 `}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-gray-900"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
             <input autoComplete="off"  id="email" type="email" name="email" className= "grow text-gray-600 " placeholder="Email"  />
             <ValidationError 
                prefix="Email" 
                  field="email"
                   errors={state.errors}
                     />
              </label>
              

            <textarea className={`text-gray-600 main-input mb-1 p-4 w-full border-[3px] rounded mt-5 `} id="message" name="message"  placeholder="Your Message"></textarea>

            
            <button  type="submit" value="Send Message" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600  duration-500 block mt-5" >
              {state.submitting ? (<div className="flex items-center justify-center gap-1"><span className="loading loading-spinner loading-md "></span> loading</div>)  : "Submit" }
              </button>
          </form>
          <Toaster className='mt-14' position="top-center"  expand={false} richColors />
         <Modal ref={modal} />
          
          <div className="info w-full lg:w-1/2  flex justify-center items-center ">
          <Lottie className="w-[400px]  " animationData={mailAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
