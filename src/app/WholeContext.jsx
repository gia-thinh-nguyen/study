'use client'
import { createContext,useState,useEffect } from "react";

export const Context=createContext();

const WholeContext = (props) => {
    const[showModal,setShowModal]=useState(false);
    const[show,setShow]=useState(false);
    const value={
        showModal,
        setShowModal,
        show,
        setShow,
    }
    return (
        <Context.Provider value={value}>
          {props.children}
        </Context.Provider>
      )
}


export default WholeContext