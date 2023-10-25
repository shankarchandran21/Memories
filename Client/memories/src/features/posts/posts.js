import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

import * as api from '../../api'


export const getPosts = createAsyncThunk('posts/getPosts',async (thunkAPI)=>{
        try {
            const resp = await api.fetchPosts()
            
            return resp.data
        } catch (error) {
            return  thunkAPI.rejectWithValue('There was an error....')
        }
})



export const createPostData = createAsyncThunk('posts/createPost',async (newPost,thunkAPI)=>{
    try {
        const {data}= await api.createPost(newPost)
        return data
    } catch (error) {
        return  thunkAPI.rejectWithValue('There was an error....')
    }
})




const initialState ={
    posts:[],
    isLoading:false,
}


const postSlice = createSlice({
    name:"postMessage",
    initialState,
    reducers:{
      
    },
    extraReducers:(builder)=>{
        //get Posts
        builder.addCase(getPosts.pending,(state)=>{
            state.isLoading = true;
        })

        builder.addCase(getPosts.fulfilled,(state,action)=>{
            state.isLoading = false;     
            state.posts = action.payload

        })
        builder.addCase(getPosts.rejected,(state,action)=>{
            state.isLoading = false; 
            console.log(action);
        })

        //Create Post
        builder.addCase(createPostData.pending,(state)=>{
            state.isLoading = true;
        })

        builder.addCase(createPostData.fulfilled,(state,action)=>{
           
            state.isLoading = false;     
            state.posts = [...state.posts, action.payload];

        })
        builder.addCase(createPostData.rejected,(state,action)=>{
            state.isLoading = false; 
            console.log(action);
        })
    }
})


export default postSlice.reducer