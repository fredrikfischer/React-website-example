import React from "react"
import postlist from './posts.json'
import { makeStyles } from '@material-ui/styles'
import { Box, CardContent, Card, Typography, Link } from '@material-ui/core'

const MusikList = () => {

    const useStyles = makeStyles({
        container: {
        },
        cardPost: {
            backgroundColor: "#ffffff",
            marginBottom: "1px",
            borderRadius: "0",
            borderBottom: '1px black',
        },
        headerText: {
          fontWeight: "bolder"
        },
        headerLink: {
          textDecoration: "none",
          color: "black"
        },
      })
    
    const classes = useStyles();

    return (
        <div className="postlist">
        {postlist.length &&
        postlist.map((post, i) => {
            return (
                <Box>
                    <Card className={classes.cardPost}>
                        <CardContent>
                        <Link onClick={event => window.location.href= post.id}>
                            <Typography className={classes.headerText} variant="h5">{post.title}</Typography>
                        </Link>
                        <Typography>{post.description}</Typography>
                        </CardContent>
                    </Card>
                </Box>
            )
        })}
        </div>
    )
}

export {MusikList}