//using sticky instead of fixed as fixed overlap initially while initially sticky doesnot overlap
//In fixed we can use pt-[height in px] pt---->position from top

import logo  from "../assets/images/name-logo-white.svg";

import React from 'react';

import { Link } from 'react-scroll'  
const Navbar = () => {
  const navEle=[{name:"Home",to:"home"},{ name: "About Me", to: "about" },{ name: "Skills", to: "skills" },{ name: "Projects",to: "projects" },{ name: "Contact Me", to: "contact" }]
  return (
    <div className='fixed grid grid-cols-2 text-white text-[18px]  w-full  right-0 left-0 p-2 px-6 mx-2'>
      <div className='col-span-1'><img src={ logo }></img></div>

        <div className='grid grid-cols-5 text-[#03B0FD] text-center'>{navEle.map((items,index)=>(
          <Link 
        key={index}
        to={items.to}
        smooth={true}
        
        duration={600}
        className='cursor-pointer hover:text-white duration-500'
        >
          {items.name}
        </Link>
        ))}

        </div>
    </div>
  )
}

export default Navbar
