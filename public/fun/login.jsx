import { todss } from "./todss" 
export async function starts(main,logs,setlogs,status,setstatus,showtodo,showcase)
{
  await fetch("http://localhost:5000/api/auth/login",{
    method:"POST",
    headers:{ 
      "Content-Type":"application/json"
      
    }, 
     
    body:JSON.stringify(logs)
  }) 
  .then(val=>val.json())
  .then(val=>{  
setstatus(val.message)  
localStorage.setItem("token",val.token)
let data=val.message
alert(data)
todss(main,logs,setlogs,status,setstatus,showtodo,showcase,data)

  }) 
  .catch(val=>console.log(val))
} 