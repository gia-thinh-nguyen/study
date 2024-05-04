"use client";

import Timer from "@/components/timer/Timer";

import SampleTaskData from "@/components/tasks/SampleTaskData";
import Tasks from "@/components/tasks/Tasks";
import FriendCount from "@/components/FriendCount/FriendCount";
import { useEffect, useRef, useState } from "react";

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
  );
}
