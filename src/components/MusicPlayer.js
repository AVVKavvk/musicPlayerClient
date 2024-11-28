import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { HiMusicNote } from "react-icons/hi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function MusicPlayer({ allSongs, onDataChange, setAllSongs, setSongNumber ,setIsPlay, currentSong, setCurrentSong}) {

  const setSongToAllPage = (song, index) => {
    setCurrentSong(song);
    onDataChange(song);
    setSongNumber(index)
    setIsPlay(true)
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(allSongs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setAllSongs(items);
  };

  return (
    <div className="mt-10">
      <div className="flex px-10 justify-center items-center mx-auto">
        <ul className="flex flex-wrap mx-auto w-[55%] justify-evenly items-center ">
          <li className="text-lg hover:underline cursor-pointer">Music</li>
          <li className="text-lg hover:underline cursor-pointer">Podcast</li>
          <li className="text-lg hover:underline cursor-pointer">Live</li>
          <li className="text-lg hover:underline cursor-pointer">Radio</li>
        </ul>
        <div className="flex w-[35%] flex-wrap justify-center items-center gap-5 bg-gray-900 opacity-70 text-white rounded-3xl p-1">
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="Search by singer"
          />
          <IoSearch color="white" className="cursor-pointer" size={25} />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between w-[80%] mx-auto items-center my-5 relative">
          <h1>Popular</h1>
          <h1>See all</h1>
        </div>
        <div className="flex flex-row text-gray-400 items-center justify-evenly px-4">
          <h1 className="w-[100px]">#</h1>
          <h1 className="w-[100px]">TITLE</h1>
          <h1 className="w-[100px]">PLAYING</h1>
          <h1 className="w-[100px]">TIME</h1>
          <h1 className="w-[100px]">ALBUM</h1>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="songs">
            {(provided) => (
              <div
                className="flex flex-col text-gray-400 items-center gap-4 mt-8 justify-evenly px-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {allSongs &&
                  allSongs.map((item, index) => (
                    <Draggable
                      key={`${item?.song}-${index}`}
                      draggableId={`${item?.song}-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          onClick={() => setSongToAllPage(item, index)}
                          className={`${
                            currentSong && currentSong.song === item.song
                              ? "bg-red-900"
                              : ""
                          } hover:bg-red-900 rounded-md p-1 py-2 flex gap-5 flex-row justify-evenly h-14 items-center cursor-pointer`}
                        >
                          <h1 className="w-[100px] pl-7">
                            {currentSong && currentSong.song === item.song ? (
                              <div className="flex justify-start gap-2 items-center">
                                <span className="bg-red-500 w-1 h-14 rounded"></span>{" "}
                                <HiMusicNote color="white" size={30} />
                              </div>
                            ) : (
                              index + 1
                            )}
                          </h1>
                          <div className="flex items-center justify-evenly gap-3 w-[220px]">
                            <img src={item.image} width="40px" alt="" />
                            <h1 className="w-[120px]">
                              {item.song.replace(".mp3", "")}
                            </h1>
                          </div>
                          <h1 className="w-[150px] ml-14">{item.allView}</h1>
                          <h1 className="w-[150px] pl-1">{item.duration}</h1>
                          <h1 className="w-[150px] pl-10 text-justify">
                            {item.album}
                          </h1>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default MusicPlayer;
