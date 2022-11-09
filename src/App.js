import './App.css';
import { Button, Box, Card, CardContent, Container, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { Contact } from './contact.js'
import { Hem } from './home.js'
import { PostList } from './postlist.js'
import { SinglePost } from './singlePost.js'
import { MusikList } from './music.js'
import React from "react";




function App() {

const mediaMobile = '@media (max-width:700px)'
const mediaTablet = '@media (max-width:1400px)'
const cardMainWidth = "750px";
const drawerWidth = "300px";
const drawerHeight = "250px";
const drawerMarginTop = "300px";

const useStyles = makeStyles({
  container: {
    /*margin: "-8px",
    padding: "0",
    backgroundImage: `url(${background_image})`,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    minWidth: '100gitvw',*/
    //minHeight: '98vh', 
    display:"inline-flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "0",
    padding: "0",
  },
  mainDiv: {
    margin: '0',
    padding: '0',
    textAlign: "center",
  },
  root: {
    marign: '0px',
    padding: '0px',
/*     display:"flex",
    flexDirection: "row",
    justifyContent: "space-between", */
  },
  boxLeft: {
    marginTop: "20px",
  },
  cardMain: {
    marign: '0px',
    padding: '0px',
    backgroundColor: "f2f2f2",
    maxWidth: cardMainWidth,
    height: "100vh",
    marginLeft: "20px",
    marginRight: "20px",
    height: "900px",
    [mediaTablet]: {
      maxWidth: "100%",
      maxHeight: "100%"
    },
    [mediaMobile]: {
      marginLeft: "0px",
      marginRight: "0px",
    }
  },
  cardProfile: {
  },
  cardLeft: {
    padding: "20px",
    backgroundColor: "#f2f2f2",
    width: drawerWidth,
    height: drawerHeight,
    marginTop:drawerMarginTop,
    [mediaTablet]: {
      display: 'none'
    }
  },
  cardRight: {
    backgroundColor: "#f2f2f2",
    width: drawerWidth,
    marginTop: drawerMarginTop,
    maxHeight: drawerHeight,
    visibility: "hidden",
    [mediaTablet]: {
      display: 'none'
    }
  },
  cardContentMain : {
    margin: '0',
    padding: '0'
  },
  buttonCard : {
    margin: "3px",
    size: "large",
    width: "100%",
    height: "50px",
    color: "white",
    backgroundColor: "#737373",
    [mediaTablet]: {
      height: "40px",
      marginBottom: "0px",
    }
  },
  image : {
    marginTop: "10px",
    maxWidth : "100%"
  },
  imgProfile : {
    marginTop: "10px",
    maxWidth : "60%"
      },
  imgHeader : {
    width : "100%" ,
    height : "100%",
    objectFit: "cover",
      },
  navBar : {
    display: "none",
    ['@media (max-width:1400px)']: {
      paddingTop: "0",
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-between',
      margin: "0px",
      paddingBottom: "0px"
    }
  }  
})

const classes = useStyles();
return (
    <Router>
      <div className={classes.mainDiv}>
      <Container className={classes.container}>
      

        {/* <Card className={classes.cardProfile}>
          <CardContent>
            <Typography>Fredrik Fischer</Typography>
            <img className={classes.imgProfile} src="../images/profilbild_test.jpg"></img>
          </CardContent>
        </Card> */}
        <Card className={classes.cardLeft}>
          <CardContent>
            <Button onClick={event =>  window.location.href='/'} className={classes.buttonCard}>Hem</Button>
            <Button onClick={event =>  window.location.href='/music/'} className={classes.buttonCard}>Music</Button>
            <Button onClick={event =>  window.location.href='/posts/'} className={classes.buttonCard}>Posts</Button>
            <Button onClick={event =>  window.location.href='/contact'} className={classes.buttonCard}>Contact</Button>
          </CardContent>
        </Card>
      

      <Card className={classes.cardMain}>
        <CardContent className={classes.cardContentMain}> 
        <img className={classes.imgHeader} src="../images/Header-website.png"></img>
  
          <CardContent className={classes.navBar}>
            <Button onClick={event =>  window.location.href='/'} className={classes.buttonCard}>Home</Button>
            <Button onClick={event =>  window.location.href='/music/'} className={classes.buttonCard}>Music</Button>
            <Button onClick={event =>  window.location.href='/posts/'} className={classes.buttonCard}>Posts</Button>
            <Button onClick={event =>  window.location.href='/contact'} className={classes.buttonCard}>Contact</Button>
          </CardContent>

          <Routes>
            <Route exact path="/" element={<Hem/>}/>
            {/* <Route path="/:topic" element={<Topic/>}/> */}
            <Route path="/posts/:id" element={<SinglePost />}/>
            <Route path="/posts/" element={<PostList/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/music" element={<MusikList/>}/>           
          </Routes>
        </CardContent>
      </Card>

      

     <Card className={classes.cardRight}>
      <CardContent>
      <Typography>Sidan är under konstruktion</Typography>
      
      </CardContent>
     </Card>
      </Container>
      
      
    </div>
    </Router>
  );
}

export default App;
