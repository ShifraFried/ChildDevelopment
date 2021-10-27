import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
import "./di.css"

function DevelopmentalInformation(props) {

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
        // necessary for content to be below app bar
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

    const dataExampleRoute = () => {
        history.push("/dataExample");
    }
    const vaccineRoute = () => {
        history.push("/vaccine");
    }

    const chatBotRoute = () => {
        history.push("/chatBot");
    }
    
    return <div>
        {/* wellcome {props.firstName} <br />
        <br />
        MENU MUI <br /> */}
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
                    {/* {['development', 'גובה ומשקל', 'התפתחות תקשורתית', 'חיסונים', 'mishkal', 'מבחנים ותרגילים', 'העלאת תמונות', 'צאט לשאלות','היועצים שלנו']
                        .map((text, index) => (
                            <ListItem button key={text.title} onClick={() =>  {viewDocuments(`${text.title}`)}}>
                                <ListItemText primary={text} />
                            </ListItem> 
                        ))} */}
                    <ListItem button onClick={() => { dataExampleRoute() }}>
                        <ListItemText primary="מידע התפתחותי" />
                        {/* <img src="../../public/image/developeInformation.PNG"></img> */}
                        {/* <img src={pathImg}></img> */}
                        <div className="devInfo"></div>
                        <div className="devInfo2"></div>
                    </ListItem>
                </List>

                {/* <List >
                      <ListItem button onClick={() => {  viewDocuments('development') }}>
                        <ListItemText primary="מידע התפתחותי" />
                     </ListItem>
                </List> */}
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
                    {/*  <ListItem button onClick={() => <div>{viewDocuments("mishkal")}</div>}>
                        <ListItemText primary="חיסונים" />
                       <Document
                            file="C:/שיפי/פרויקט/project/src/assets/oneMonth.pdf">
                        </Document> 
                    </ListItem> */}
                </List>
                <List>
                    {/*   <ListItem button onClick={() => <div>{viewDocuments("mishkal")}</div>}>
                        <ListItemText primary="מבחנים ותרגילים" />
                       <Document
                            file="C:/שיפי/פרויקט/project/src/assets/oneMonth.pdf">
                        </Document> 
                    </ListItem> */}
                </List>
                <List>
                    {/* <ListItem button onClick={() => { }}>
                        <ListItemText primary="העלאת תמונות" />
                        <Document
                            file="C:/שיפי/פרויקט/project/src/assets/oneMonth.pdf">
                        </Document>
                    </ListItem> */}
                </List>
                <Divider />
            </Drawer>
        </div>


    </div>
}

const mapStateToProps = (({ user }) => {
    return { birthDate: user.birthDate, firstName: user.firstName }
})

export default connect(mapStateToProps)(DevelopmentalInformation)
