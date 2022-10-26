import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import UseUploadFile from './fileReader';
import { postPicture, getChildPictures } from '../api/pictureApi'

const UploadPictures = (props) => {
    const [myPictures, setMyPictures] = useState('');
    const { fileData, onfileChange } = UseUploadFile();
    const [picturesArray, setPicturesArray] = useState([]);

    const uploadPictures = async (id, myPictures) => {
        await postPicture({ id: props.id, myPictures: fileData });
    }

    const getPictures = async () => {
        console.log("in getPictures");
        await getChildPictures(props.id).then((data) => {
            console.log(data);
            setPicturesArray(data);
            console.log(picturesArray, "data data");
        });
    }

    return (
        <div>
            <input type="file" className="a d" onChange={onfileChange}></input>
            <Button variant="outlined" color="secondary" onClick={() => uploadPictures(myPictures)} >upload picture</Button>
            <Button variant="outlined" color="secondary" onClick={() => getPictures()} >get child Pictures</Button>
            {picturesArray && picturesArray.map(pic => <div>
                <img src={pic}></img>
                {/* <img key={props.id}>
                    {pic}
                </img> */}
            </div>)}
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

