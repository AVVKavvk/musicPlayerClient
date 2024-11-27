import React from 'react'
import musicLogo from '../img/music.png'
import { IoMdHome } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiMusicNote } from "react-icons/hi";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { RiSettings4Fill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { FaMusic } from "react-icons/fa6";
function Listitem() {
  return (
    <div className="mt-10 flex flex-col relative h-[90vh]"> 
    <a href="/" className="flex flex-row gap-5 justify-center items-center font-bold text-3xl">
      <FaMusic color="#ef4444" size={50}/>
      <h1>
        <span className="text-red-500">
          Dream
        </span>
        Music
      </h1>
    </a>
  
    <div className="flex flex-col ml-16 mt-10"> 
      <p className="text-xs font-normal mb-1">MENU</p>
      <ul className="flex flex-col gap-3 ml-2">
        <li className="flex items-center space-x-4  hover:underline cursor-pointer ">
          <IoMdHome size={24} color="#ef4444" />
          <h1 className="text-lg">Home</h1>
        </li>
        <li className="flex items-center space-x-4 hover:underline cursor-pointer ">
          <FaArrowTrendUp size={24} color="#ef4444" />
          <h1 className="text-lg">Trends</h1>
        </li>
        <li className="flex items-center space-x-4 hover:underline cursor-pointer ">
          <HiMusicNote size={24} color="#ef4444" />
          <h1 className="text-lg">Library</h1>
        </li>
        <li className="flex items-center space-x-4 hover:underline cursor-pointer ">
          <RiExpandDiagonalFill size={24} color="#ef4444" />
          <h1 className="text-lg">Discover</h1>
        </li>
      </ul>
    </div>
  

    <div className="flex flex-col ml-16 absolute bottom-16"> 
      <p className="text-xs font-normal mb-1">GENERAL</p>
      <ul className="flex flex-col gap-3 ml-2">
        <li className="flex items-center space-x-4 hover:underline cursor-pointer">
          <RiSettings4Fill size={24} color="#ef4444" />
          <h1 className="text-lg">Settings</h1>
        </li>
        <li className="flex items-center space-x-4 hover:underline cursor-pointer">
          <MdOutlineLogout size={24} color="#ef4444" />
          <h1 className="text-lg">LogOut</h1>
        </li>
      </ul>
    </div>
  </div>
  

  )
}

export default Listitem