import axios from 'axios'


const url = `http://localhost:5000/posts`

export const fetchPostsAPI = ()=> axios.get(url)
export const createPostAPI = (newPost) =>axios.post(url,newPost)
export const updatePostAPI = (newPost,id)=>axios.patch(`${url}/${id}`,newPost)
export const deletePostAPI = (id)=>axios.delete(`${url}/${id}`)
export const likePostAPI = (id,countAdd)=>axios.patch(`${url}/like/${id}`,{count:countAdd})