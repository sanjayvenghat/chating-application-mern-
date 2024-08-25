import express from "express";
import cookieParser from "cookie-parser"; 
import dotenv from "dotenv";
import connectToMangoDb from "./db/connectToMangoDb.js";
import authrouter from "./routes/router.js";
import router from "./routes/MessageRoute.js";
import allrouter from "./routes/Get.js"; 
import cors from 'cors' 
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 
app.use(cors())
const port = process.env.PORT || 5000;
try {
  app.use("/api/auth", authrouter);
  app.use("/api",allrouter)
  app.use("/api/messages", router); 
  
} catch (error) {
  console.error("Error importing routes:", error);
  
}

app.listen(port, () => {
  try {
    connectToMangoDb();
    console.log(`Server started on port ${port}`);
  } catch (error) {
    console.error("Error connecting to database:", error);
   
  }
});