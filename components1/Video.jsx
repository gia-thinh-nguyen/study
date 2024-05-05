import ReactPlayer from 'react-player'
import React from 'react'
import { useState,useEffect } from 'react'
import videos from '.././seed/videos'
import { BsSkipForward } from "react-icons/bs";

const Video = () => {
    const [mounted, setMounted] = useState(false);
    const [randomVideoId, setRandomVideoId] = useState(null);
    useEffect(() => {
        setMounted(true);
        generateRandomVideoId();
       }, [])
       const generateRandomVideoId = () => {
        const random = Math.floor(Math.random() * videos.items.length);
        setRandomVideoId(videos.items[random].id.videoId);
    }
  return  mounted?(
    <div >
        <ReactPlayer url={`https://www.youtube.com/watch?v=${randomVideoId}`} playing controls={true} width='100%'/>
        <div className='flex flex-row justify-end'>
        <button onClick={generateRandomVideoId} className='pt-[50[px]'>
            <div className='flex justify-center items-center gap-[50px]'>
            <p className='mr-10 text-xl font-bold'>SKIP</p> 
            <BsSkipForward size={30} />
            </div>
        </button>
        </div>
    </div>
  ):null
}

export default Video