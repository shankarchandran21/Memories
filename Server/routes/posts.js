import express from 'express';
import {createPost, getPosts,updatePost,deletePost,likeCount } from '../controllers/posts.js'
const router = express.Router()

//http://localhost:5000/posts
router.get('/',getPosts)

//http://localhost:5000/posts
router.post('/',createPost)

//http://localhost:5000/posts/:id
router.patch('/:id',updatePost)

//http://localhost:5000/posts/:id
router.delete('/:id',deletePost)

//http://localhost:5000/posts/like/:id
router.patch('/like/:id',likeCount)





export default router