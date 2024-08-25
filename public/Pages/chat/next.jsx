import React from 'react'
import Chat from './Chat'
export const next = ({name,setname}) => {
  return (
    <div>  
    <Chat value={{name,setname}}/>
    </div>
  )
}
