import React from 'react'
import Post from './Post/Post'
import { Grid ,CircularProgress } from '@material-ui/core'
import useStyles from './styles'
import { useSelector } from 'react-redux'
function Posts() {
  const classes = useStyles()
  const {posts,isLoading} = useSelector((state)=>state.posts)

  if(isLoading){
    return<CircularProgress/>
  }


  return (
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
          {posts.map((post)=>{
              return<Grid item key={post._id} xs={12} sm={6}>
                  <Post {...post}/>
              </Grid>
          })}
      </Grid>
  )
}

export default Posts