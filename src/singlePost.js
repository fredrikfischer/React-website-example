import React from 'react';
import postlist from './posts.json';
import Markdown from 'markdown-to-jsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardContent } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const SinglePost = (props) => {



    const useStyles = makeStyles({
        container: {
            padding: "0",
            margin: "0",
            
        },
        buttonCard : {
          marginLeft: "10px",
          marginTop: "10px",
          size: "small",
          borderRadius: "20px",
          backgroundColor: "rgb(51,51,51, 0.2)",
          
          
        },
        sectionTop : {
          display: "flex",
          flexDirection: "row",
          padding: "0",
          

        },
        sectionMain : {
            padding: "0",
            margin: "-10px",
            minHeight: "60vh"
          },

      })
      
      const classes = useStyles();

    const fetchedPost = {}
    postlist.forEach((post, i) => {
        const url = window.location.pathname
        const urlsplit = url.split("/");
        const validId = parseInt(urlsplit[2])
        if (validId === post.id){
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.description = post.description ? post.description : "No description given"
            fetchedPost.content = post.content ? post.content : "No content given"
        } 
    })

    return(
        <div>
            <Card>
                <CardContent className={classes.sectionTop}>
                    <Button onClick={event => window.location.href='/posts/'} className={classes.buttonCard}><ArrowBack/></Button>
                </CardContent>

                <CardContent className={classes.sectionMain}>
                    <Markdown>
                        {fetchedPost.content}
                    </Markdown>
                </CardContent>
            </Card>

        </div>
    )
}

export {SinglePost}