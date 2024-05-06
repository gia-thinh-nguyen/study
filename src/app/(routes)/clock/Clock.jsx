'use client'
import React, {useEffect, useRef,useContext } from 'react';
import { Context } from '@/app/WholeContext';
import './clock.css';
import Sector from '../../../../components1/Sector';

const Clock = ()=> {
    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const secondRef = useRef(null);
    const audioRef = useRef(null);
    function playSound() {
      audioRef.current?.play();
    }
    
    const{show,setStartDegree,endDegree,setEndDegree,currentPhase,setCurrentPhase}=useContext(Context);
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
        {show?<Sector/>:null}
    </div>
    <audio src='/assets/others/doorbell.mp3' ref={audioRef}></audio>
    </div>
  )
}





export default Clock;