import React from 'react'
import './Home.css' 

const LoginTode = ({value}) => { 
console.log(value)
   
  return ( 
    <div> 
    
    <div className='text-white tost rounded flex justify-center items-center flex-col ' 
    style={{ 
        width:"0px"
        
    }} >  
    <h1 style={{
      color:value==="Registered successfully" && "login successfully"?"green":"red"
    }}>{value}</h1>  
    <div className='abosolute bottom-0' style={{
        height: '100%',
        width:"100%",
        position:"relative",
        

    }}>
    <div style={{
        width: '0%',
        height:'5px',
        backgroundColor:value==="Registered successfully"&& "login successfully"?"green":"red",
        position:"absolute",
        bottom:"0", 
        
    
        
    }} className='showcase'>
    </div>
    </div>
    
    </div>

    </div>
    
  )
}

export default LoginTode