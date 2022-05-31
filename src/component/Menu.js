import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
import "./Menu.css"

function Menu(props) {

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }));
    const classes = useStyles();

    const history = useHistory();

    const heightWeightRoute = () => {
        history.push("/HeightWeight");
    }

    const DevelopmentalInformationRoute = () => {
        history.push("/DevelopmentalInformation");
    }
    const vaccineRoute = () => {
        history.push("/vaccine");
    }

    const chatBotRoute = () => {
        history.push("/chatBot");
    }
    const uploadPicturesRoute = () => {
        history.push("/uploadPictures");
    }
    
    return <div>
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
            </AppBar>
            <main className={classes.content}>
            </main>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <Divider />
                <List className='bar' >
                    <ListItem className='itemBar' button onClick={() => { DevelopmentalInformationRoute() }}>
                        <ListItemText primary="מידע התפתחותי" />
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8765 2.50737C20.531 4.0365 19.9951 13.6522 21.5592 15.1982C23.1233 16.7405 32.5211 15.9599 34.7789 14.2057C40.2105 9.98228 26.1716 -2.37459 21.8765 2.50737Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3508 22.0978C32.411 24.1316 26.949 35.7267 16.1238 35.7267C8.03909 35.7267 1.48621 29.2575 1.48621 21.2779C1.48621 11.3338 11.4239 4.9734 14.2727 7.78587C15.9128 9.40506 14.0655 17.0244 17.0075 19.9307C19.9495 22.837 28.2907 20.0639 30.3508 22.0978Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="devInfo"></div>
                        <div className="devInfo2"></div>
                    </ListItem>
                </List>
                <List>
                    <ListItem className='itemBar' button onClick={() => { heightWeightRoute() }}>
                        <ListItemText primary="גובה ומשקל" />
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8503 16.4797V29.0386" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.5048 10.4692V29.04" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28.0167 23.1165V29.0394" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 19.8118C1 6.11134 5.62718 1.54321 19.5047 1.54321C33.3823 1.54321 38.0095 6.11134 38.0095 19.8118C38.0095 33.5122 33.3823 38.0803 19.5047 38.0803C5.62718 38.0803 1 33.5122 1 19.8118Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </ListItem>
                </List>
                <List>
                    <ListItem  className='itemBar' button onClick={() => { vaccineRoute() }}>
                        <ListItemText primary="חיסונים" />
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5977 35.4366C14.7749 35.4366 14.7587 31.6723 14.7587 25.3039C14.7587 18.9355 1.48621 14.4737 1.48621 7.48223C1.48621 1.57628 6.78912 1.66438 18.5896 1.66438C30.3921 1.66438 35.695 1.57628 35.695 7.48223C35.695 14.4737 22.4245 18.9355 22.4245 25.3039C22.4245 31.6723 22.4184 35.4366 18.5977 35.4366Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </ListItem>
                </List>
                <List>
                     <ListItem className='itemBar' button onClick={() =>{chatBotRoute()}}>
                        <ListItemText primary="צאט לשאלות" />
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.4917 20.416H27.5085" stroke="#EE2A7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.8726 20.416H19.8904" stroke="#EE2A7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.2536 20.416H12.2704" stroke="#EE2A7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4433 32.9059C27.6371 38.6406 19.0349 39.8795 11.9968 36.6661C10.9578 36.2531 4.23298 38.0918 2.77381 36.6529C1.31463 35.2122 3.17871 28.5723 2.76044 27.5464C-0.495978 20.5992 0.76075 12.1036 6.56882 6.37082C13.9831 -0.951731 26.029 -0.951731 33.4433 6.37082C40.8729 13.7047 40.8576 25.5852 33.4433 32.9059Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>  
                    </ListItem>
                </List>
                <List>
                <ListItem className='itemBar' button onClick={() =>{uploadPicturesRoute()}}>
                        <ListItemText primary="העלאת תמונות" />
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 18.1406C1 31.156 5.39583 35.4957 18.5795 35.4957C31.7632 35.4957 36.159 31.156 36.159 18.1406C36.159 5.12513 31.7632 0.7854 18.5795 0.7854C5.39583 0.7854 1 5.12513 1 18.1406Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9162 12.1068C15.9162 13.9324 14.4186 15.4108 12.5694 15.4108C10.7222 15.4108 9.22266 13.9324 9.22266 12.1068C9.22266 10.2812 10.7222 8.80273 12.5694 8.80273C14.4186 8.80273 15.9162 10.2812 15.9162 12.1068Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M35.9121 23.1433C34.2378 21.4434 31.8698 18.0081 27.5196 18.0081C23.1694 18.0081 23.0744 25.5843 18.6349 25.5843C14.1935 25.5843 12.4051 23.012 9.51066 24.3554C6.61813 25.6969 4.26154 31.0366 4.26154 31.0366" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </ListItem>
                </List>
               
                <Divider />
            </Drawer>
        </div>
    </div>
}

const mapStateToProps = (({ user }) => {
    return { birthDate: user.birthDate, firstName: user.firstName }
})

export default connect(mapStateToProps)(Menu)
