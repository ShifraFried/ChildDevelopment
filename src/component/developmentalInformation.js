import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

//אולי התקנה של זה תעזור
//npm install @material-ui/styles

function DevelopmentalInformation() {
    const handleChange = () => [

    ]
    // return <div>
    //     wellcome to DevelopmentalInformation
    //      <BottomNavigation>
    //         <BottomNavigationAction label="Recents" />
    //         <BottomNavigationAction label="Favorites" />
    //         <BottomNavigationAction label="Nearby" />
    //     </BottomNavigation>
    // </div>
    return <div>
        wellcome to DevelopmentalInformation
        <BottomNavigation value="nav" onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Recents" value="recents"/>
            <BottomNavigationAction label="Favorites" value="favorites" />
            <BottomNavigationAction label="Nearby" value="nearby"/>
            <BottomNavigationAction label="Folder" value="folder" />
        </BottomNavigation>
    </div>
}

export default DevelopmentalInformation