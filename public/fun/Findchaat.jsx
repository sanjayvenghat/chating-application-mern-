async function findtypeChat(msg) { 
   let params=localStorage.getItem("finder")
   params=JSON.parse(params)  
   console.log(params)
    try {
      const response = await fetch(`http://localhost:5000/api/messages/send/${params}`, { 
        method:"Post",
        headers: {
          'Content-Type': 'application/json',
          "access": localStorage.getItem('token'),
        },
        body: JSON.stringify(msg),

      });
      const data = await response.json(); 
      console.log(data)
  
    } catch (error) {
      console.error(error);
    }
  }
  
  export default findtypeChat;