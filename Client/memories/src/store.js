import {configureStore} from '@reduxjs/toolkit'
import postSlice from './features/posts/posts'


export const store = configureStore({
    reducer:{
        posts:postSlice,
    }
})