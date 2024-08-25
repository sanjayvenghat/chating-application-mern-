import React, { useEffect } from 'react' 
import Credential from './Credential';
import Inp from '../../components/Inp';
import './mains.css' 
import { messagess } from '../../fun/Msg'
import { Link } from 'react-router-dom';
const Chat = (props) => {  
  let{name,setname,checking,shw,setshw,logout}=props.value
        useEffect(() => {   
          messagess(setname) 
                     
          }, []); 
          console.log(name)
    
  return ( 
    <div>
    
      <div className='alls flex bg-white'> 
    
     <Credential value={{name,setname,checking,shw,setshw,logout}}/>
      
        <div className='main bg-white flex flex-col  my-5 '>    
      <div className='flex justify-center '>
      <Inp/>
      </div>  
      <div style={{
        overflow:"scroll"
      }}> 
      {
      name.others&& name.others.map((val,index)=>(
         <div>
         <div className="card card-side bg-base-100 shadow-xl my-4 text-white" style={{
          backgroundColor:val.gender==="male"?"red":"pink"
         }}>
    <figure>
      <img
        src={val.profilepic} 
        style={{
          height:"50px",
          width:"50px",
        }}
        alt="Movie" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{val.username.toUpperCase()}</h2>
      <h2 className="card-title">{val.gender}</h2>
      
      <div className="card-actions justify-end"> 
      <Link to="/msg">
      <button className="btn btn-primary" 
      onClick={()=>checking(val._id)}>Chat</button>
      </Link>
       
      </div>
     
    </div>
  </div>
         </div>
        ))
      
      }
     
      </div>
  
      
    
      </div> 
      
      
  
      </div>
  
    </div>
    
  )
}

export default Chat