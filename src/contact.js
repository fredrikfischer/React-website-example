import React from "react";
import Markdown from "markdown-to-jsx";
import { Box, BoxItem, List, ListItem, Typography, Link, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RSS_logo from './images/RSS_logo.png';
import email_logo from './images/email_logo.png';
import github_logo from './images/github_logo.png';


const Contact = () => {

    const useStyles = makeStyles({
        thisList: {
            padding: "0",
            margin: "0"
        },
        mainDiv: {
            margin: "40px"
        },
        logo: {
            marginBottom: "-7px",
            marginRight: "5px",
            width: "25px"
        }
      })
      
      const classes = useStyles();
    return (
    <div className={classes.mainDiv}>
        <h2>Contact</h2>
            <List className={classes.thisList}>
                <ListItem >
                <Typography><img className={classes.logo} src={email_logo}/> Example@email.com</Typography>
                </ListItem>
                <ListItem>
                 <Typography><img className={classes.logo} src={RSS_logo}/>   <Link href="https://example.com/RSS.xml" underline="none">example.com/RSS.xml</Link></Typography>  
                </ListItem>
                <ListItem>
                <Typography><img className={classes.logo} src={github_logo}/>  <Link href="https://github.com/example" underline="none">github.com/example</Link></Typography>
                </ListItem>
            </List>
    </div>
    )
    
}

export {Contact}