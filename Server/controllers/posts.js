import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'



export const getPosts =async(req,res)=>{
    try {
       const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}

export const  createPost = async (req,res)=>{
      const post = req.body
      console.log(post)
      const newPost = new PostMessage(post)

      try {
       await newPost.save();
       res.status(201).json(newPost)
      } catch (error) {
        res.status(409).json({message:error.message})
      }
}


export const updatePost = async (req,res)=>{
       const {id} = req.params
       const post = req.body
       console.log(id)
    //    console.log(post)
       if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id`)

      const updatePost = await PostMessage.findByIdAndUpdate(id,post,{new:true})

      res.json(updatePost)

}

export const deletePost = async (req,res)=>{
    const {id} = req.params
    console.log(id)
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id`)

    await PostMessage.findByIdAndRemove(id)
    res.status(200).json({message:'Post deleted successfully '})

}

export const likeCount = async (req,res)=>{
    const {id} = req.params
    const count = req.body.count
    console.log(count)
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id`)

            //it's one of the method for reference
    // const post = await PostMessage.findById(id)
    // const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true})
    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:count},{new:true})


    res.json(updatedPost)
}
