import React, { useEffect } from 'react'
import {Grow,Grid} from '@material-ui/core'
import Forms from '../Forms/Forms'
import Posts from '../Posts/Posts'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../features/posts/asyncAction'
function Home() {
   
    const dispatch = useDispatch()
    useEffect(()=>{
          dispatch(getPosts())
    },[dispatch])
  return (
    <Grow in>
    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7}>
                <Posts/>
          </Grid>
          <Grid item xs={12} sm={4}>
                <Forms/>
          </Grid>
    </Grid>
</Grow>
  )
}

export default Home