import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
// import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles({
    root: {
        width: 230,
    },
});

export default function TypographyMenu() {
    const classes = useStyles();

    return (

        <Paper  className={classes.root}>
            <MenuList ><br />
                <MenuItem >
                    <Typography variant="inherit">מידע התפתחותי</Typography>
                    {/* <ListItemIcon> */}
                    <FastfoodIcon fontSize="small" />
                    {/* </ListItemIcon> */}
                </MenuItem><br />
                <MenuItem ><br />
                    <Typography variant="inherit">גובה ומשקל</Typography>
                </MenuItem><br />
                <MenuItem><br />
                    <Typography variant="inherit" noWrap>
                        משחקים
          </Typography>
                </MenuItem><br />
                <MenuItem><br />
                    <Typography variant="inherit" noWrap>
                        חיסונים
          </Typography>
                </MenuItem><br />
                <MenuItem><br />
                    <Typography variant="inherit" noWrap>
                        מבחנים ותרגילים
          </Typography>
                </MenuItem><br />
                <MenuItem><br />
                    <Typography variant="inherit" noWrap>
                        העלאת תמונות
          </Typography>
                </MenuItem><br />
                <MenuItem><br />
                    <Typography variant="inherit" noWrap>
                        שיתוף
          </Typography>
                </MenuItem><br />
                <MenuItem><br />
                    <Typography variant="inherit" noWrap>
                        ליועצים שלנו
          </Typography>
                </MenuItem><br />
            </MenuList>
        </Paper>

    );
}