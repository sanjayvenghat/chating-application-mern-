import express from 'express'   

let authrouter=express.Router()
import { login, logout, signup } from '../controllers/auth.controller.js'
authrouter.post('/signup',signup)
authrouter.post('/login',login) 
 authrouter.post('/logout',logout) 
export default authrouter