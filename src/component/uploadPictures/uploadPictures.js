import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import UseUploadFile from './fileReader';
import { postPicture } from '../api/pictureApi'

const UploadPictures = (props) => {
    const [myPictures, setMyPictures] = useState('');
    const { fileData, onfileChange } = UseUploadFile()

    const uploadPictures = async (id, myPictures) => {
        console.log("in uploadPictures");
        await postPicture({ id: props.id, myPictures: fileData });

    }

    return (
        <div>uploadPictures
            <input type="file" className="a d" onChange={onfileChange}></input>
            <Button variant="outlined" color="secondary" onClick={() => uploadPictures(myPictures)} >upload picture</Button>
        </div>

    )
}

const mapStateToProps = (({ user }) => {
    console.log(user, "user in uplold");
    return {
        id: user._id
    }
})

export default connect(mapStateToProps)(UploadPictures)

