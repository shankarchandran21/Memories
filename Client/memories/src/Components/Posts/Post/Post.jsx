import React from 'react'
import { Card,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core'
import useStyles from './styles'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import posts from '../../../features/posts/posts';
function Post({creator,title,message,tags,selectFile,createdAt,likeCount}) {
  console.log(createdAt)
  const classes = useStyles()
   

  return (
    <Card className={classes.card}>
        <CardMedia className={classes.media} image={selectFile} title={title}/>
        <div className={classes.overlay}>
          <Typography variant="h6">{creator}</Typography>
          <Typography variant='body2'>{moment(createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{color:'white'}} size='small' onClick={()=>{}}><MoreHorizIcon fontSize='default'/></Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color='textSecondary'>{tags.map((tag)=>`#${tag}`)}</Typography>
        </div>
        <CardContent>
           <Typography className={classes.title} variant="h5" gutterBottom>{message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size='small' color='primary' onClick={()=>{}}>
                <ThumbUpAltIcon fontSize='small'/>
                Like
                {likeCount}
            </Button>
            <Button size='small' color='primary' onClick={()=>{}}>
                <DeleteIcon fontSize='small'/>
                Delete
            </Button>
        </CardActions>

    </Card>
  )
}

export default Post