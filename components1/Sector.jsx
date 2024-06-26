'use client'
import React, { useRef, useEffect, useContext } from 'react';
import { Context } from '@/app/WholeContext';


const Sector = () => {
    const{startDegree,endDegree,currentPhase}=useContext(Context);
    if(startDegree===null)return;

  const canvasRef = useRef(null);
    
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Convert degrees to radians
    const startAngle = (startDegree * Math.PI) / 180;
    const endAngle = (endDegree * Math.PI) / 180;

    // Calculate coordinates for the arc
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = Math.min(x, y);

    // Draw the circle
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#f9cdca'; // Set circle color
    ctx.fill();

    // Draw the sector
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = currentPhase?'#CE7B91':'#88D9E6'; // Set sector fill color
    ctx.fill();
  }, [startDegree, endDegree]);

  return <canvas ref={canvasRef} width={250} height={250} className='absolute z-[-5] top-[-10px] right-[50px] skew-x--3 skew-y--3' />;
};

export default Sector;

//#C0E8F9