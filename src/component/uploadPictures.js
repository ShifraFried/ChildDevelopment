import { React, useState } from 'react'
import { connect } from 'react-redux';
import PreviewImage from 'react-preview-image';
import { createItem, getChildPictures } from './api/pictureApi'
import sss from "../assets/developeInformation.PNG"

// הסיפריה לא תומכת בכל סוגי סיומות הקבצים ולכן 
//יש להודיע למשתמש אם העלה קובץ שלא נתמך


function UploadPictures(props) {

    const [imageDetails, setImageDetails] = useState({ imageName: null, imageUrl: null })
    const [valid, setValid] = useState(true);
    const [pictures, setPictures] = useState();

    const uploadPictures = () => {
        console.log(imageDetails);
        console.log(props.id, "id");
        createItem(props.id, imageDetails);
        alert("in uploadPictures");
        console.log(imageDetails, "imageDetails");

    }
    const getAllChildPictures = async () => {
        console.log("in getAllChildPictures");
        await getChildPictures(props.id).then((data) => {
            console.log(data);
            setPictures(data);
        })
            .catch(err => { })
    }

    const saveNewPicture = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImageDetails({
                imageName: file.name,
                imageUrl: reader.result
            });
            setValid(false);
        }

        reader.readAsDataURL(file)
    }

    return (
        <div>
            <input type="file" onChange={(e) => saveNewPicture(e)}></input>
            <br></br>
            <button onClick={uploadPictures} disabled={valid}>upload picture</button>
            <br></br>
            <br></br>
            <button onClick={getAllChildPictures}>My pictures</button>
            {/* {pictures && pictures.map(p => {
                <PreviewImage
                    // source="C:\שיפי\פרויקט\ChildDevelopment\public\logo192.png"
                    source={p.imageId}
                />
            })}
             */}

            {/* { pictures && <PreviewImage source={pictures}/>} */}

            {/* {pictures && pictures.map(im=><img src={im}></img>) }  */}
             {/* <PreviewImage
                source={["../assets/developeInformation.PNG"]}
                index={1}
                visible={true}
                indicatorStyle={{ top: '50px' }}
                // onHide={this.handleTriggle}
            /> */}
          { pictures && <img src={pictures[1]}></img>}

            {/* {after you have an image 
           from: https://www.npmjs.com/package/react-preview-image
                npm install react-preview-image --save
                import PreviewImage from './PreviewImage';
             <PreviewImage
          source={SOURCE}
          index={index}
          visible={visible}
          indicatorStyle={indicatorStyle}
          onHide={this.handleTriggle}
        />
          להשתמש בקומפוננה הזו להציג תמונה ששמורה בדטבייס 
        כערך שך הsource   
        } 
                */}
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

