export function todss(navigate,sign,setsign,status,setstatus,showtodo,showcase,data){
    showtodo.style.width="0px"  
    showtodo.style.display="flex"
  alert(data+"is")
    let counter=0;
    let progress=0
    let interval=setInterval(() => {
     
     if(counter<=400)
     {
      counter+=1;
      showtodo.style.width=counter+"px";  
      let finaldata=data==="Registered successfully"||"login successfully"?data:"error occoured"
      setstatus(finaldata)
      
     } 
     else 
     {
        
       setTimeout(() => { 
         let pro=setInterval(() => { 
         
           progress+=1;
           if(progress<=100)
           { 
             showcase.style.width=progress+"%"
                 console.log(progress)
           } 
           if(progress===100) 
           { 
            
             clearInterval(pro) 
             clearInterval(interval)
              showtodo.style.width="0px";
          showtodo.style.display="none"   
          
          data==="Registered successfully"&&navigate("/login")  
          if(data==="login successfully")
                     navigate("/chat")
            setstatus("")
           }
           
         }, 500);
       }, 1000);
     }

    }, 10);
}