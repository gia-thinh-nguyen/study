"use client";

import FriendCount from "@/components/FriendCount/FriendCount";
import { useEffect, useRef, useState,useContext } from "react";
import { Context } from "@/app/WholeContext";
import Image from "next/image";
import Clock from './(routes)/clock/Clock';
import Video from "./../../components1/Video"
import TodoListModal from "./../../components1/Todo"
export default function Home() {
  const screenRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [background, setBackground] = useState(1);
  

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    });

    return () => {
      document.removeEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
          setIsFullscreen(false);
        }
      });
    };
  }, []);

  const enterFullscreen = () => {
    const elem = screenRef.current;

    if (elem?.requestFullscreen) {
      elem.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen();
      setIsFullscreen(true);
    } else {
      exitFullscreen();
      setIsFullscreen(false);
    }
  };
  const changeBackground = () => {
    setBackground((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * 5) + 1;
      } while (next === prev);
      return next;
    });
  }
  const clockRef = useRef();
  const handleSkip = () => {
    if (clockRef.current) {
      clockRef.current.skip();
    }
  }
  const{show,setShow}=useContext(Context);
  const handleSetPomodoro = () => {
    setShow(prev=>!prev);
  }
  
  const{showModal,setShowModal}=useContext(Context);
  const handleOpenModal=()=>{
    setShowModal(prev=>!prev);
  }
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
   }, [])
  return mounted&&(
    <div className="h-screen w-full transform-gpu " ref={screenRef}>
    <div className="relative h-screen w-screen">
    
    <div className='bg-white z-[500] absolute max-w-[300px] top-[20vh] left-[45vw] rounded-lg p-2' >
    {showModal&&<TodoListModal /> }
    </div>
    {/*background */}
      <Image src={"/assets/background/night.jpeg"} width={1920} height={1080} alt="image" className={`max-w-[100%] z-[-5] absolute ${background==1?'':'hidden'}`}></Image>
      <Image src={"/assets/background/forest.png"} width={1920} height={1080} alt="image" className={`max-w-[100%] z-[-5] absolute ${background==2?'':'hidden'}`}></Image>
      <Image src={"/assets/background/night2.jpeg"} width={1920} height={1080} alt="image" className={`max-w-[100%] z-[-5] absolute ${background==3?'':'hidden'}`}></Image>
      <Image src={"/assets/background/rain.jpeg"} width={1920} height={1080} alt="image" className={`max-w-[100%] z-[-5] absolute ${background==4?'':'hidden'}`}></Image>
      <Image src={"/assets/background/landscape.jpeg"} width={1920} height={1080} alt="image" className={`max-w-[100%] z-[-5] absolute ${background==5?'':'hidden'}`}></Image>
    {/* furniture */}
    <Image src={"/assets/others/svg.png"} width={1920} height={1080} alt="image" className=" absolute"></Image>
    {/* onselected elements */}
   <div className={` w-full max-w-[40vw] max-h-[10vh] opacity-0 hover:opacity-100 z-[100] fixed  ${isFullscreen?'top-[77%]':'top-[91%]'} left-[70px]`} onClick={handleOpenModal}>
   <Image layout="responsive" src="/assets/onselected/notebook.png" width={480} height={50} alt="image" className="scale-[102%]" ></Image >
   </div>
    <div className={` max-w-[40%] opacity-0 hover:opacity-100 z-[100] fixed ${isFullscreen?'top-[35%]':'top-[42%]'} left-[33%]`}>
      <Image layout="responsive" src="/assets/onselected/laptop.png" width={500} height={50} alt="image" ></Image>
    </div>
    {/* video */}
    <div className={`absolute  ${isFullscreen?'top-[39%]':'top-[46%]'}  left-[35.25%] z-[200] w-full max-w-[32vw]  3xl:max-w-[33vw] `}><Video className='scale-[80%'/></div>
    
      {/* clock */}
    <div className="group hidden 3xl:block" > 
      <div className={`box1  z-[100] absolute ${isFullscreen?'top-[47%]':'top-[55%]'} right-[4vw]`}>
        <Image src="/assets/onselected/clock.png" width={400} height={100} alt="image" className="z-[50] opacity-0 group-hover:opacity-100"></Image>
        <div className={`absolute right-[105px] top-[29%]`}><Clock ref={clockRef}/></div>
      </div>
      <div className={`box2 opacity-0 group-hover:opacity-100 z-[110] absolute ${isFullscreen?'top-[33%]':'top-[38%]'} right-[120px]`}>
        <Image src="/assets/others/callout.png" width={280} height={100} alt="image"></Image> 
        
        <div className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-max">
          <p className=" top-[35%] font-bold text-2xl w-max">Pomodoro Clock 🍅</p>
          <div className="pt-10 flex flex-row justify-center gap-10 text-lg">
          <button onClick={handleSetPomodoro}>On/Off</button>
             <button onClick={handleSkip}>Skip</button>
       
          </div>
        </div>
        
      </div>
    </div>
    
    <div className="group 3xl:hidden scale-[85%]" > 
      <div className={`box1  z-[100] absolute ${isFullscreen?'top-[54vh]':'top-[65vh]'} right-[-5vw]`}>
        <Image src="/assets/onselected/clock.png" width={400} height={100} alt="image" className="z-[50] opacity-0 group-hover:opacity-100"></Image>
        <div className={`absolute right-[105px] top-[29%]`}><Clock ref={clockRef}/></div>
      </div>
      <div className={`box2 opacity-0 group-hover:opacity-100 z-[110] absolute ${isFullscreen?'top-[37vh]':'top-[48vh]'} right-[0vw]`}>
        <Image src="/assets/others/callout.png" width={280} height={100} alt="image"></Image> 
        
        <div className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-max">
          <p className=" top-[35%] font-bold text-2xl w-max">Pomodoro Clock 🍅</p>
          <div className="pt-10 flex flex-row justify-center gap-10 text-lg">
          <button onClick={handleSetPomodoro}>On/Off</button>
             <button onClick={handleSkip}>Skip</button>
       
          </div>
        </div>
        
      </div>
    </div>
    
    {/* friend */}
   
  
    
    {/*buttons */}
    <button 
    className={`bg-gray-700 bg-opacity-50 rounded-md hover:bg-opacity-70 transition-opacity text-gray-300 z-[200] absolute translate-x-[-50%] translate-y-[-50%] ${isFullscreen?'top-[3%] right-[-8%]':'top-[5%] right-[-8%]'} text-4xl 
    flex items-center justify-center`} onClick={changeBackground}>Change background 🌆</button>
    <button
      className={`bg-gray-700 bg-opacity-50 rounded-md hover:bg-opacity-70 transition-opacity text-gray-300 z-[200] absolute translate-x-[-50%] translate-y-[-50%] ${isFullscreen?'top-[95%] left-[90%]':'top-[110%] left-[90%]'} text-4xl 
      flex items-center justify-center gap-2`} onClick={handleFullscreen}>
      {isFullscreen ? "End Session" : "Lock In"}<Image src="/assets/others/lock.png" width={50} height={50} alt="image"></Image>
    </button>
    {/*task */}
    
  
    
    </div>
    

      
  </div>

  );
}