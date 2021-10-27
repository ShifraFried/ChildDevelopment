import React from 'react';
import { getKey } from '../utils/ageUtils'
import { connect } from 'react-redux';
import detailsByAge from '../assets/detailsByAge'

function DataExample(props) {

    function getFileByKey(key) {
        console.log(detailsByAge[key]);
        return detailsByAge[key];
    }

    const data = getFileByKey(getKey(props.birthDate));
    function viewDocuments(p) {
        alert(data.text, "text")
        console.log(data.documents[p], "data.documents[p]");
        return data.documents[p]
    }

    return (
        <div>
            <iframe width="75%" src={viewDocuments("development")} />
        </div>
    )
}

const mapStateToProps = (({ user }) => {
    return { birthDate: user.birthDate, firstName: user.firstName }
})

export default connect(mapStateToProps)(DataExample)