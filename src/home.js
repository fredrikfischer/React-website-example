import React from "react";
import Markdown from "markdown-to-jsx";
import { Box, BoxItem, Button, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ArrowBack } from '@material-ui/icons';
import profilbild from "./images/profilbild_test.jpg"

const Hem = () => {

    const useStyles = makeStyles({

          mainDiv: {
            margin: "0px",
            padding: "0px",
          },
          imgProfile: {
            maxWidth: "250px",
            maxHeight: "250px",
            ['@media (max-width:700px)']: {
              maxWidth: "200px",
              maxHeight: "200px",
              marginLeft: "auto",
              marginRight: "auto",
            }
          },
          boxThing: {
            height: "500px",
            padding: "30px",
            //border: "1px solid black",
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            margin: "0px",
            ['@media (max-width:700px)']: {
              display: "inline",
              padding: "0px",
              /* textAlign: "center", */
            }
          },
          textBox: {
            //border: "1px solid black",
            maxWidth: "450px",
            paddingLeft: "0px",
            paddingRight: "0px",
            marginLeft: "30px",
            marginTop: "10px",
            ['@media (max-width:700px)']: {
              //marginTop: "10px",
            }
            
          },
          textWelcome: {
            //border: "1px solid black",
            //display: 'none',
            marginTop: "25px",
            ['@media (max-width:700px)']: {
              padding: "0px"
            }
          }
  
      })

      const classes = useStyles();
    return (
    <div className={classes.mainDiv}>
  
                        <Typography variant="h4" className = {classes.textWelcome}>
                          Welcome!
                        </Typography>
                        <Box className ={classes.boxThing}>
                        <Box className ={classes.imgProfile}
                        component="img"
                        alt="Picture did not load"
                        src={profilbild}
                        />
                        <Box className ={classes.textBox}>  
                        <Typography variant="h6">
                        This is an example website. It is written in the React framework. If you wan't to use this, simply clone the repo and make equivalent changes. You can also add new features if you'd like. 
                        </Typography> 
                        </Box>
                        </Box>
                        
    </div>
    )
    
}

export {Hem}
