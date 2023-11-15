import React, { useEffect, useState } from 'react'
import { TextField,Button,Typography,Paper } from '@material-ui/core'
import useStyles from './styles'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPostData,updatePostData} from '../../features/posts/asyncAction'
import { updatePost } from '../../features/posts/posts'


function Forms() {
    
    const [postData,setPostData] = useState({
      creator:"",
      title:"",
      message:"",
      tags:"",
      selectFile:""
    })
    const {updateId,posts} = useSelector((state)=>state.posts)
  

  

    useEffect(()=>{
        if(updateId){
          const findUpdateData = posts.find(({_id})=>_id === updateId)
          setPostData(findUpdateData)
        }else{
            
        }
    },[updateId])

    const dispatch = useDispatch()
    const classes = useStyles()
    const handleSubmit = (e)=>{

      e.preventDefault()
      if(updateId){
          console.log(postData)
          dispatch(updatePostData(postData,updateId))
          dispatch(updatePost(postData))
      }else{
        dispatch(createPostData(postData))
      }
      setPostData({
        creator:"",
        title:"",
        message:"",
        tags:"",
        selectFile:""
      })

    }
    const clear =()=>{

    }

  return (
    <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant='h6'>{updateId?'Editing':'Creating'} a Memory</Typography>
          <TextField 
           value={postData.creator}
           onChange={(e)=>setPostData({...postData, creator:e.target.value})}
           name='creator' 
           variant='outlined'
           label="creator"
           fullWidth/>
            <TextField 
           value={postData.title}
           onChange={(e)=>setPostData({...postData, title:e.target.value})}
           name='title' 
           variant='outlined'
           label="title"
           fullWidth/>
            <TextField 
           value={postData.message}
           onChange={(e)=>setPostData({...postData, message:e.target.value})}
           name='message'  
           variant='outlined'
           label="message"
           fullWidth/>
            <TextField 
           value={postData.tags}
           onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
           name='tags' 
           variant='outlined'
           label="tags"
           fullWidth/>
           <div className={classes.fileInput}>
                <FileBase type='file'  multiple={false} onDone={({base64})=>setPostData({...postData,selectFile:base64})}/>
           </div>
           <Button
              className={classes.buttonSubmit}
              variant='contained' 
              color="primary" 
              size='large' 
              type='submit'
                fullWidth>
                Submit
            </Button>
            <Button
             
              variant='contained' 
              color="secondary"
              size='small' 
              onClick={clear}
                fullWidth>
                  Clear
            </Button>
        </form>
        

    </Paper>
  )
}

export default Forms