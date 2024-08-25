import express from 'express'   
import protect from '../MIDDLEWARE/MIDDLE.js';
import { sendMessage } from '../controllers/Message.js';
import { getMessages } from '../controllers/Message.js';
let router=express.Router();
router.post('/send/:id',protect,sendMessage)   
router.get('/send/:id',protect,getMessages) 
export default router