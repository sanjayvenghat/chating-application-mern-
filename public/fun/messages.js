async function typename(params,setmaper) { 
    
    try {
      const response = await fetch(`http://localhost:5000/api/messages/send/${params}`, {
        headers: {
          'Content-Type': 'application/json',
          "access": localStorage.getItem('token'),
        },

      });
      const data = await response.json(); 
 
    
if (typeof data === "object") {
  setmaper(Object.entries(data))
}


      
    } catch (error) {
      console.error(error);
    }
  }
  
  export default typename;
  