import * as api from '../../api'
import {createAsyncThunk} from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk('posts/getPosts',async (thunkAPI)=>{
    try {
        const resp = await api.fetchPostsAPI()
        
        return resp.data
    } catch (error) {
        return  thunkAPI.rejectWithValue('There was an error....')
    }
})



export const createPostData = createAsyncThunk('posts/createPost',async (newPost,thunkAPI)=>{
try {
    const {data}= await api.createPostAPI(newPost)
    return data
} catch (error) {
    return  thunkAPI.rejectWithValue('There was an error....')
}
})


export const updatePostData = createAsyncThunk('posts/updatePost',async (changesPost,thunkAPI)=>{
    try {
        console.log(changesPost._id)
     
        const {data}= await api.updatePostAPI(changesPost,changesPost._id)
        return data
    } catch (error) {
        return  thunkAPI.rejectWithValue('There was an error....')
    }
})



export const deletePostData = createAsyncThunk('posts/deletePost',async (deleteId,thunkAPI)=>{
try {
    console.log(deleteId)
    const {data}= await api.deletePostAPI(deleteId)
    return data
} catch (error) {
    return  thunkAPI.rejectWithValue('There was an error....')
}
})


export const likeCountData = createAsyncThunk('posts/likeCount',async (countAndId,thunkAPI)=>{
try {
   
    console.log(countAndId)
    const {data}= await api.likePostAPI(countAndId.id,countAndId.count)
    return data
} catch (error) {
    return  thunkAPI.rejectWithValue('There was an error....')
}
})