import React, { createContext, useEffect, useState } from 'react'
import {getAll} from "../API/index"


export const ContextDemo = createContext("")

const DemoContext = ({children}) => {
    const [demos,setDemos] = useState([])
     useEffect(()=>{
        getAll().then((res)=>{
            setDemos(res.data)
        })
    },[])
  return (
    <div>
      <ContextDemo.Provider value={{demos,setDemos}}>
        {children}
      </ContextDemo.Provider>
    </div>
  )
}

export default DemoContext
