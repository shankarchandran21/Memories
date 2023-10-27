import './App.css'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import memories from './Images/memories.png'
import Posts from './Components/Posts/Posts'
import Forms from './Components/Forms/Forms'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './features/posts/asyncAction'
import { useEffect } from 'react'


function App() {
      const {posts} = useSelector((state)=>state.posts)
      const classes = useStyles()
      const dispatch = useDispatch()
      useEffect(()=>{
            dispatch(getPosts())
      },[dispatch])



  return (
    <Container maxWidth="lg">
       <AppBar  className={classes.appBar} position="static" color="inherit">
              <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
              <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
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
    </Container>
  )
}

export default App
