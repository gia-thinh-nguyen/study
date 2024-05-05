'use client'
import React, { forwardRef,useImperativeHandle, useEffect, useRef,useState } from 'react';
import './clock.css';
import Sector from '../../../../components1/Sector';

const Clock = forwardRef((props, ref)=> {
    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const secondRef = useRef(null);
    const audioRef = useRef(null);
    function playSound() {
      audioRef.current?.play();
    }
    const [startDegree, setStartDegree] = useState(null);
    const [endDegree, setEndDegree] = useState(null);
    const[show,setShow]=useState(false);
    const[currentPhase,setCurrentPhase]=useState(true);

  useEffect(() => {
    const setClock = () => {
      const date = new Date();
      const second = date.getSeconds() / 60;
      const minute = (second + date.getMinutes()) / 60;
      const hour = (minute + date.getHours()) / 12;

      setDeg(secondRef.current, second);
      setDeg(minuteRef.current, minute);
      setDeg(hourRef.current, hour);
  
    };
   
    const setDeg = (element, deg) => {
      element.style.setProperty('--deg', deg * 360);
    };

    setClock();
    const intervalId = setInterval(setClock, 1000);
    
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  
  
  const setPomodoro = () => {
    const date = new Date();
    const second = date.getSeconds() / 60;
    const minute = (second + date.getMinutes()) / 60;
    setShow(prev=>!prev);
    if(currentPhase){
      setEndDegree(minute * 360-90+25/60*360);
    }
    else{
      setEndDegree(minute * 360-90+5/60*360);
    }
  }

    useEffect(() => {
     
      const date = new Date();
      const second = date.getSeconds() / 60;
      const minute = (second + date.getMinutes()) / 60;
    
      
      
      const intervalId = setInterval(() => {
        setStartDegree(prev=>{
          if(prev>endDegree){
            playSound();
            
            if(currentPhase){
              setEndDegree(minute * 360-90+5/60*360);
              setCurrentPhase(false);
            }
            else{
              setEndDegree(minute * 360-90+25/60*360);
              setCurrentPhase(true);
            }
          }
        
            return minute*360-90;
        
        
        })}, 1000)
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    });

  const skip=()=>{
    const date = new Date();
    const second = date.getSeconds() / 60;
    const minute = (second + date.getMinutes()) / 60;
    if(currentPhase){
      setEndDegree(minute * 360-90+5/60*360);
    }
    else{
      setEndDegree(minute * 360-90+25/60*360);
    }
    setCurrentPhase(prev=>!prev);
  }
  useImperativeHandle(ref, () => ({
    setPomodoro,
    skip,
  }));
  return (
    <div>
      <div className="clock transform-gpu ">
        <div className="hand hours" ref={hourRef}></div>
        <div className="hand minutes" ref={minuteRef}></div>
        <div className="hand seconds" ref={secondRef}></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
        {show?<Sector startDegree={startDegree} endDegree={endDegree} color={currentPhase}/>:null}
    </div>
    <audio src='/assets/others/doorbell.mp3' ref={audioRef}></audio>
    </div>
  )
})

export default Clock


