"use client";

import Timer from "@/components/timer/Timer";

import SampleTaskData from "@/components/tasks/SampleTaskData";
import Tasks from "@/components/tasks/Tasks";
import FriendCount from "@/components/FriendCount/FriendCount";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function Home() {
  const screenRef = useRef<HTMLElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  return (

    

    <div>
      {/* Tim's code*/}
      <div className="relative h-screen w-screen">
      <Image src={"/assets/background/night.jpeg"} width={1920} height={1080} alt="image" className="z-[-5] absolute hidden"></Image>
      <Image src={"/assets/background/forest.png"} width={1920} height={1080} alt="image" className="z-[5] absolute "></Image>
    <Image src={"/assets/svg.png"} width={1920} height={1080} alt="image" className="z-[50] absolute"></Image>
    <div className="opacity-0 hover:opacity-100 z-[100] absolute top-[43%] left-[-15px]"><Image src="/assets/onselected/calendar.png" width={470} height={100} alt="image"></Image></div>
    </div>
    //////////////////////////

      <main
      ref={screenRef}
      className="h-screen max-h-screen w-screen bg-[url('/img/lofi-bg.png')] bg-cover"
    >
      
      <div className="w-full flex justify-between p-10">
        <FriendCount />
        <Timer />
      </div>

      <div className="w-full flex justify-end p-10 mt-15">
        <Tasks tasks={SampleTaskData} />
      </div>

      <div className="h-1/2 flex items-end justify-center p-10">
        <button
          className="bg-gray-700 bg-opacity-50 px-10 py-5 rounded-md hover:bg-opacity-70 transition-opacity text-gray-300"
          onClick={handleFullscreen}
        >
          {isFullscreen ? "End Session" : "Lock In"}
        </button>
      </div>
    </main>
    </div>

  );
}