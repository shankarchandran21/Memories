import React from 'react'
import { Card,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core'
import useStyles from './styles'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import { deletePost, updatePostId,addLike } from '../../../features/posts/posts';
import{createPostData,likeCountData,updatePostData,deletePostData} from '../../../features/posts/asyncAction'
import {useDispatch} from 'react-redux'
function Post({creator,title,message,tags,selectFile,createdAt,likeCount,_id}) {
 
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Card className={classes.card}>
        <CardMedia className={classes.media} image={selectFile} title={title}/>
        <div className={classes.overlay}>
          <Typography variant="h6">{creator}</Typography>
          <Typography variant='body2'>{moment(createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{color:'white'}} size='small' onClick={()=>{dispatch(updatePostId(_id))}}><MoreHorizIcon fontSize='medium'/></Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color='textSecondary'>{tags.map((tag)=>`#${tag}`)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}</Typography>
        <CardContent>
           <Typography className={classes.title} variant="body2" color="textSecondary" component='p'>{message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size='small' color='primary' onClick={()=>{
                dispatch(addLike(_id))
                dispatch(likeCountData({id:_id,count:likeCount+1}))
            }}>
                <ThumbUpAltIcon fontSize='small'/>
                &nbsp; Like &nbsp;
                {likeCount}
            </Button>
            <Button size='small' color='primary' onClick={()=>{
              dispatch(deletePost(_id))
              dispatch(deletePostData(_id))
            }}>
                <DeleteIcon fontSize='small'/>
                Delete
            </Button>
        </CardActions>

    </Card>
  )
}

export default Post