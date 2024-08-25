import React from 'react'
 
import { Link } from 'react-router-dom';
import { SlLogout } from "react-icons/sl";
import { FcCollaboration } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { IoMaleSharp } from "react-icons/io5";
import { IoIosFemale } from "react-icons/io"; 

import MessageCol from '../Messagecol.jsx/MessageCol';
import { PiUsersFourThin } from "react-icons/pi"
const Credential = (props) => { 
  let{name,setname,checking,shw,setshw,logout}=props.value
  return (
    <div> 
   
    <div className='sidebar bg-black p-4'>   
      <div className='flex items-center '>
      <FcCollaboration className='text-4xl' /> 
      <p  className='text-3xl text-white'>Findings</p>
      </div>
      
      <div className='flex justify-center items-center  p-3'> 
      <img src={name.admin && name.admin.profile} height="70px" width="70px" ></img> 
     <p className='text-white mx-3' style={{
      color:name.admin&&name.admin.gender==="male"?"red":"pink"
     }} >{name.admin&&name.admin.name}</p> 
     {
      name.admin && name.admin.gender==="female" &&<IoIosFemale className='text-pink-200'/>
     }
     {
     
      name.admin && name.admin.gender==="male" &&<IoMaleSharp className='text-red-500 text-3xl'/>
     }
      </div> 
      <div className='flex p-3 bg-red-300 my-4 rounded'> 
      <SlLogout className='text-2xl text-red-500'/> 
      <p className='mx-3 text-red-500' onClick={()=>logout()}>Logout</p>
      </div>
      <div className='flex p-3 bg-red-300 my-4 rounded'> 
      <FcAbout className='text-2xl text-white'/>  
      <Link to="/abt"> <p className='mx-3 text-blue-500'>About Us</p></Link>
     
      </div>  
      <div className='flex p-3 bg-red-300 my-4 rounded'
      onClick={()=>setshw(true)}> 
     <PiUsersFourThin className='text-2xl text-green-500'/>
       <p className='mx-3 text-green-500'>Users</p>
     
      </div> 
      </div> 

    </div>
  )
}

export default Credential