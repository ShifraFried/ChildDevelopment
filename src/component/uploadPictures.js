import { React, useState } from 'react'
import { connect } from 'react-redux';
import { createItem } from './api/pictureApi'


// הסיפריה לא תומכת בכל סוגי סיומות הקבצים ולכן 
//יש להודיע למשתמש אם העלה קובץ שלא נתמך


function UploadPictures(props) {

    const [imageDetails, setImageDetails] = useState({ imageName: null, imageUrl: null })
    const [valid, setValid] = useState(true);

    const uploadPictures = () => {
        console.log(imageDetails);
        console.log(props.id,"id");
        createItem(props.id, imageDetails);
        alert("in uploadPictures");
        console.log(imageDetails, "imageDetails");

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
            <button onClick={uploadPictures} disabled={valid}>upload picture</button>
            <input type="file" onChange={(e) => saveNewPicture(e)}></input>
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
    console.log(user,"user in uplold");
    return {
         id: user._id 
    }
})

export default connect(mapStateToProps)(UploadPictures)

