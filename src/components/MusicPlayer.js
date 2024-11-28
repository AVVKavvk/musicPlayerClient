import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

function MusicPlayer({allSongs, onDataChange}) {
  const [currentSong, setCurrentSong] = useState(null)
  
  const setSongToAllPage = (song)=>{
    setCurrentSong(song)
    onDataChange(song)
  }
  return (
    <div className="mt-10">
      <div className="flex px-10  justify-center items-center mx-auto">
        <ul className="flex flex-wrap mx-auto  w-[55%] justify-evenly items-center ">
         <li className="text-lg hover:underline cursor-pointer">Music</li>
         <li className="text-lg hover:underline cursor-pointer">Podcast</li>
         <li className="text-lg hover:underline cursor-pointer">Live</li>
         <li className="text-lg hover:underline cursor-pointer">Radio</li> 
        </ul>
        <div className="flex w-[35%] flex-wrap justify-center items-center gap-5 bg-gray-900 opacity-70 text-white rounded-3xl p-1">
          <input type="text" className=" bg-transparent outline-none" placeholder="Search by singer" />
          <IoSearch color="white" className=" cursor-pointer" size={25}/>
        </div>
      </div>
      <div className="mt-10">
      <div  className="flex flex-row items-center justify-evenly px-4">
        <h1 className="w-[100px]">#</h1>
        <h1 className="w-[100px]">TITLE</h1>
        <h1 className="w-[100px]">PLAYING</h1>
        <h1 className="w-[100px]">TIME</h1>
        <h1 className="w-[100px]">ALBUM</h1>
      </div>
      <div className="flex flex-col items-center gap-6 mt-8 justify-evenly px-4">
      {
        allSongs && allSongs?.map((item,index)=>{
          return(
            <div onClick={() => setSongToAllPage(item)} key={index} className=" hover:bg-red-900 rounded-md p-1 flex gap-5 flex-row justify-evenly items-center cursor-pointer">
              <h1 className="w-[100px] pl-7">{index+1}</h1>
              <div className="flex items-center justify-evenly gap-3 w-[220px]">
                <img src={item?.image} width="40px" alt="" />
                <h1 className="w-[120px]">{item?.song.replace('.mp3', "")}</h1>
              </div>
              <h1 className="w-[150px] ml-14">{item?.allView}</h1>
              <h1 className="w-[150px] pl-1">{item?.duration}</h1>
              <h1 className="w-[150px] pl-10 text-justify">{item?.album}</h1>
            </div>
          )
        })
      }
      </div>
      </div>
    </div>
  )
}

export default MusicPlayer