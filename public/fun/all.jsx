import { todss } from "./todss";
  export const logins = async (navigate,sign,setsign,status,setstatus,showtodo,showcase) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sign)
      });
      const data = await response.json(); 

      
      todss(navigate,sign,setsign,status,setstatus,showtodo,showcase,data) 
      
     
    }     
     catch (data) { 
       
      alert("invalid credentials")
      
    }
  } 
 