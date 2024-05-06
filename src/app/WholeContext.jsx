'use client'
import { createContext,useState,useEffect } from "react";

export const Context=createContext();

const WholeContext = (props) => {
    const[showModal,setShowModal]=useState(null);
    const[show,setShow]=useState(false);
    const [tasks, setTasks] = useState([]);
    const [startDegree, setStartDegree] = useState(null);
    const [endDegree, setEndDegree] = useState(null);
    const[currentPhase,setCurrentPhase]=useState(true);
    const value={
        showModal,
        setShowModal,
        show,
        setShow,
        tasks,
        setTasks,
        startDegree,
        setStartDegree,
        endDegree,
        setEndDegree,
        currentPhase,
        setCurrentPhase
    }
    return (
        <Context.Provider value={value}>
          {props.children}
        </Context.Provider>
      )
}


export default WholeContext