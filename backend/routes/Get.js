import express from "express" 
import { apps } from "../controllers/Login.js" 
import { dels } from "../controllers/Dels.js"
import protect from "../MIDDLEWARE/MIDDLE.js"
let allrouter=express.Router()
allrouter.get('/',protect,apps) 
allrouter.delete('/delete/:id',protect,dels)
export default allrouter