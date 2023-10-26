import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

import * as api from '../../api'



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



const initialState ={
    posts:[],
    isLoading:false,
    updateId:null,
}


const postSlice = createSlice({
    name:"postMessage",
    initialState,
    reducers:{
            updatePostId :(state,action)=>{
                   state.updateId = action.payload
            },
            updatePost:(state,action)=>{
                console.log(action.payload._id)
                let findUpdatePost =  state.posts.find(({_id})=>_id == action.payload._id)
                   findUpdatePost.creator = action.payload.creator
                   findUpdatePost.title = action.payload.title
                   findUpdatePost.message = action.payload.message
                   findUpdatePost.tags = Array.isArray(action.payload.tags) ? action.payload.tags :Array(action.payload.tags)
                   findUpdatePost.selectFile = action.payload.selectFile
                    state.updateId = ''
                   
            },
            deletePost:(state,action)=>{
               state.posts = state.posts.filter(({_id})=>_id !== action.payload)
               
            }
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

        //Update Post
        builder.addCase(updatePostData.pending,(state)=>{
          
        })

        builder.addCase(updatePostData.fulfilled,(state,action)=>{
           

        })
        builder.addCase(updatePostData.rejected,(state,action)=>{
                state.isLoading = true
        })
        //delete Post
        builder.addCase(deletePostData.pending,(state)=>{
          
        })

        builder.addCase(deletePostData.fulfilled,(state,action)=>{
           

        })
        builder.addCase(deletePostData.rejected,(state,action)=>{
                state.isLoading = true
        })
    }
})

export const {updatePostId,updatePost,deletePost} = postSlice.actions

export default postSlice.reducer