import {createSlice} from '@reduxjs/toolkit'
import { getPosts,createPostData,likeCountData,updatePostData,deletePostData } from './asyncAction'



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
               
            },
            addLike:(state,action)=>{
                let findUpdateLike =  state.posts.find(({_id})=>_id == action.payload)
                findUpdateLike.likeCount = findUpdateLike.likeCount + 1
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

        //addLike
        builder.addCase(likeCountData.pending,(state)=>{
          
        })

        builder.addCase(likeCountData.fulfilled,(state,action)=>{
           

        })
        builder.addCase(likeCountData.rejected,(state,action)=>{
                state.isLoading = true
        })



    }
})

export const {updatePostId,updatePost,deletePost,addLike} = postSlice.actions

export default postSlice.reducer