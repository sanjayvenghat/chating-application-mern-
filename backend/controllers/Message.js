import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
import User from "../user.model.js";

export const sendMessage = async (req, res) => {
    try {
        // Extract data from request
        const { messages } = req.body;
        const receiverId = req.params.id; 
        console.log(req.user)
        const senderId = req.user._id; // Assuming req.user is set by authentication middleware

        // Find existing conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }); 
        console.log(receiverId,senderId)

        // Create new conversation if it does not exist
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        // Create new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message: messages
        });

        // Save new message
        await newMessage.save();

        // Add message to conversation 
        console.log(newMessage)
        conversation.messages.push(newMessage._id);

        // Save updated conversation
        await conversation.save();

        // Respond with the new message
        res.status(201).json(newMessage); 
        

    } catch (error) {
        // Log the error and send a response
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
 
export let getMessages=async(req,res)=>{
    try 
    { 
        let users;
        let userstwo;
  let id=req.params.id 
  const senderId=req.user._id 
  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, id] }
}).populate("messages");  
 
if(conversation.messages.length)
    { 

 users=await User.findById(senderId,{profilepic:1}) 
 userstwo=await User.findById(id,{profilepic:1}) 
 console.log(users,userstwo)
} 
console.log(users+"fdasfsafdsaf") 
let obj={
    send:users,
    senss:userstwo,
    conversation:conversation
}
res.status(200).json(obj)
    } 
    catch(err)
    {
res.json("something occoured")
    }
}