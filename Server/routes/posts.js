import express from 'express';
import {createPost, getPosts,updatePost,deletePost } from '../controllers/posts.js'
const router = express.Router()

//http://localhost:5000/posts
router.get('/',getPosts)

//http://localhost:5000/posts
router.post('/',createPost)

//http://localhost:5000/posts/:id
router.patch('/:id',updatePost)


router.delete('/:id',deletePost)




export default router