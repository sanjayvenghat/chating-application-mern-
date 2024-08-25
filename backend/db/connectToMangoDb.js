import mongoose from "mongoose"; 
const connectToMangoDb=()=>{ 
    try 
    {
          mongoose.connect(process.env.MANGO_DB_URI) 
          console.log("connected success fully")
    } 
    catch (err)
    {
         console.log(err)
    }

} 
export default connectToMangoDb