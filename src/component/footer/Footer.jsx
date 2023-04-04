import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <div className="w-full h-auto bg-secondary ">
      <div className="flex md:flex-row flex-wrap md:justify-around justify-center md:p-4 m-auto px-auto">
        <div className="my-6 mx-20 w-[150px]">
          <motion.h1 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition ={{delay:0.2,duration:0.6}}
           className="text-lg text-whiteColor mb-2 font-medium p-auto ">
            Movies
          </motion.h1>
          <motion.ul 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.2,duration:0.6}}>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2 px-3">
              Action
            </li>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2 px-3">
              Drama
            </li>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2 px-3">
              Horror
            </li>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2 px-3">
              Funny
            </li>
          </motion.ul>
        </div>
        <div className="my-6 mx-20 w-[150px]">
          <motion.h1
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition ={{delay:0.3,duration:0.6}}
          className="text-lg text-whiteColor mb-2 font-medium p-auto ">
            TV-Series
          </motion.h1>
          <motion.ul
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{delay:0.3,duration:0.6}}>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2 px-3">
              Action
            </li>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2 px-3">
              Drama
            </li>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2 px-3">
              Animation
            </li>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2 px-3">
              Cartoon
            </li>
          </motion.ul>
        </div>
        <div className="my-6 mx-20 w-[150px]">
          <div>
            <motion.h1
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition ={{delay:0.4,duration:0.6}} className="text-lg text-whiteColor mb-2 font-medium p-auto ">
              Contact
            </motion.h1>
            <motion.ul
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{delay:0.4,duration:0.6}}>
              <li className="text-sm text-whiteColor text-start opacity-80 hover:bg-background py-2 px-3">
                Chanmin Thu
              </li>
              <li className="text-sm text-whiteColor text-start opacity-80 hover:bg-background py-2 px-3">
                Chanminthu123@gmail.com
              </li>
              <li className="text-sm text-whiteColor text-start opacity-80 hover:bg-background py-2 px-3">
                +959 977 452 160
              </li>
            </motion.ul>
          </div>
        </div>
        <div className="my-6 mx-20 w-[150px]">
          <motion.h1 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition ={{delay:0.5,duration:0.6}}
          className="text-lg text-whiteColor mb-2 font-medium ">Support</motion.h1>
          <motion.ul  
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.4,duration:0.6}}
          className="gap-3">
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2 px-3">
              FAQ
            </li>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2  px-3">
              Support
            </li>
            <li className="text-sm text-whiteColor opacity-80 hover:bg-background py-2  px-3">
              Devices
            </li>
          </motion.ul>
        </div>
      </div>
      <div className="bg-transprent">
        <div className="flex flex-row justify-evenly py-8">
          <motion.h1
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition ={{delay:0.4,duration:0.6}} className="text-2xl text-redColor font-semibold mr-6">
            Mm-movie.
          </motion.h1>
          <Link to='https://www.facebook.com/profile.php?id=100015446434578'>
          <BsFacebook className="text-whiteColor hover:scale-125 hover:text-highlight" />
          </Link>
          <Link to='https://www.linkedin.com/in/chanmin-thu-a6416b229'>
          <BsLinkedin className="text-whiteColor hover:scale-125 hover:text-highlight" />
          </Link>
          <Link to='https://github.com/Chan-Min-Thu'>
          <BsGithub className="text-whiteColor hover:scale-125 hover:text-highlight" />
          </Link>
          <Link to='https://mail.google.com/mail/u/0/#inbox?compose=new'>
          <SiGmail className="text-whiteColor hover:scale-12 hover:text-highlight" />
          </Link>
        </div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.4,duration:0.6}} className="mx-auto py-5 w-full text-center">
        <span className="text-sm  opacity-80 text-whiteColor">2023@ CopyRight Design By Chanmin Thu</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
