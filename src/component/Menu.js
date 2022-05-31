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
                <List >
                    <ListItem button onClick={() => { DevelopmentalInformationRoute() }}>
                        <ListItemText primary="מידע התפתחותי" />
                        <div className="devInfo"></div>
                        <div className="devInfo2"></div>
                    </ListItem>
                </List>
                <List>
                    <ListItem button onClick={() => { heightWeightRoute() }}>
                        <ListItemText primary="גובה ומשקל" />
                    </ListItem>
                </List>
                <List>
                    <ListItem button onClick={() => { vaccineRoute() }}>
                        <ListItemText primary="חיסונים" />
                    </ListItem>
                </List>
                <List>
                     <ListItem button onClick={() =>{chatBotRoute()}}>
                        <ListItemText primary="צאט לשאלות" />
                    </ListItem>
                </List>
                <List>
                <ListItem button onClick={() =>{uploadPicturesRoute()}}>
                        <ListItemText primary="העלאת תמונות" />
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
