import { lazy, Suspense, useEffect, useState } from "react";
import { axiosClient } from "./utils/axios";

const Listitem = lazy(()=>import('./components/Listitem'))
const MusicPlayer = lazy(()=>import('./components/MusicPlayer'))
const Card = lazy(()=>import('./components/Card'))

function App() {

  const [cardData, setCardData]= useState({
    "_id": "67474723474c013dc936e030",
    "song": "HeroesTonight.mp3",
    "singer": "Janji, Johnning",
    "description": "Janji, Johnning - Heroes Tonight (feat. Johnning)",
    "createdAt": "2024-11-27T16:21:55.748Z",
    "updatedAt": "2024-11-27T17:29:48.211Z",
    "__v": 0,
    "image": "https://raw.githubusercontent.com/pawankumar45/musicPlayerImages/main/images/herostonight.png\n",
    "album": "NCS",
    "allView": "125",
    "duration": "3:28",
    "monthlyView": "125"
})

  const onClickMusicPlayer = (data)=>{
      setCardData(data)
  }
  // const getData = async ()=>{
  //   try {
  //     const res = await axiosClient.get('/song/all')
  //     // console.log(res.data.result[0]);
      
  //   } catch (err) {
      
  //   }
  // }

  // useEffect(() => {    
  //   getData()
  // }, [])
  
  return (
    <div className=" flex flex-row  relative  bg-gradient-to-r from-[#0e0b0b] via-[#221111] to-[#310a0a] min-h-screen text-white text-lg gap-7">
      <div className="w-[20%]">
     <Suspense fallback={<h1>Loding......</h1>}>
      <Listitem />
     </Suspense>
      </div>

      <div className="w-[55%]  bg-gradient-to-b from-[#501616] via-[#300f0f] to-[#140808]">
        <Suspense fallback={<h1>Loding......</h1>}>
        <MusicPlayer onDataChange={onClickMusicPlayer} />
        </Suspense>
      </div>
      {
        cardData 
        &&
        <div className="w-[17%] rounded-md absolute bottom-7 right-16 bg-[#501616] h-[450px]">
          <Suspense fallback={<h1>Loding......</h1>}>
          <Card data={cardData}/>
          </Suspense>
        </div>
      }
    </div>
  );
}

export default App;

// {
//   "_id": "67474723474c013dc936e030",
//   "song": "HeroesTonight.mp3",
//   "singer": "Janji, Johnning",
//   "description": "Janji, Johnning - Heroes Tonight (feat. Johnning)",
//   "createdAt": "2024-11-27T16:21:55.748Z",
//   "updatedAt": "2024-11-27T17:29:48.211Z",
//   "__v": 0,
//   "image": "https://raw.githubusercontent.com/pawankumar45/musicPlayerImages/main/images/herostonight.png\n",
//   "album": "NCS",
//   "allView": "125",
//   "duration": "3:28",
//   "monthlyView": "125"
// }