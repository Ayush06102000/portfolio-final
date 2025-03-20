import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import codechef from '../images/codechef.png'
import github from '../images/github.png'
import linked_in from '../images/linked_in.png'
import leetcodes from '../images/leetcodes.png';







//             To See again



const Typewriter = ({ texts, speed = 100, delay = 1000 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const currentText = texts[index];
  
      if (!isDeleting && charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
  
      if (isDeleting && charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      }
  
      if (charIndex === currentText.length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), delay);
      }
  
      if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, [charIndex, isDeleting, index, texts, speed, delay]);
  
    return (
      <motion.p
        className="text-4xl font-mono text-blue-50 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        I am a&nbsp;
        <span>{displayedText}</span>
        <motion.span
          className="ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          |
        </motion.span>
      </motion.p>
    );
  };

const Main = () => {
  return (
    <motion.div id='home'
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      className="m-12 pt-40"
    >
      <h3 className="text-white text-2xl">Hey! It's Me</h3>
      <h3 className="text-[#03B0FD] text-6xl font-mono my-4 tracking-wide">
        Ayush  Kumar
      </h3>
      <Typewriter texts={["Web Developer", "Coder","DevOps Engineer"]} speed={100} delay={1500}/>

      {/* Connect Me Section */}
      <div className="text-white mt-8 flex justify-around  lg:w-[26%] w-[50%]">Connect Me: 
      <a href="" target="_blank"  className="h-8 w-8 hover:h-9 hover:w-9"><img src={codechef}></img></a>
      <a href="" target="_blank" className="h-8 w-8 hover:h-9 hover:w-9"><img src={linked_in}></img></a>
      <a href="" target="_blank" className="h-8 w-8 hover:h-9 hover:w-9"><img src={github}></img></a>
      <a href="" target="_blank" className="h-8 w-8 hover:h-9 hover:w-9"><img src={leetcodes}></img></a>
      </div>

      {/* Button Section  */}
      <button className="border-[#03B0FD] border-3 p-4 mt-16 w-[18%] rounded-4xl text-[#03B0FD] hover:bg-blue-100 duration-1000 transition-shadow hover:shadow-md hover:shadow-blue-200">Hire Me</button>
      <button className="border-[#03B0FD] m-6 border-3 p-4 mt-16 w-[18%] rounded-4xl text-[#03B0FD] hover:bg-blue-100 duration-1000 transition-shadow hover:shadow-md hover:shadow-blue-200">Email Me</button>
    </motion.div>
     
  );
};

export default Main;
