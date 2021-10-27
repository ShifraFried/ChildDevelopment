import React from 'react';
import { getKey } from '../utils/ageUtils'
import { connect } from 'react-redux';
import detailsByAge from '../assets/detailsByAge.json'

function DevelopmentalInformation(props) {

    function getFileByKey(key) {
        console.log(detailsByAge[key]);
        return detailsByAge[key];
    }

        const data = getFileByKey(getKey(props.birthDate));

    return <div>
        wellcome {props.firstName} <br />
        <br />
        MENU MUI
        {/* <DevelopmentalInf file={data.documents.development} /> */}
        {/* <Height file={data.documents.height} /> */}
    </div>
}

const mapStateToProps = (({ user }) => {
    return { birthDate: user.birthDate, firstName: user.firstName }
})

export default connect(mapStateToProps)(DevelopmentalInformation)

// import React from 'react';
// import { getAge } from '../utils/ageUtils'
// import { connect } from 'react-redux';
// import detailsByAge from '../assets/detailsByAge.json'

// function DevelopmentalInformation(props) {

//     function getFileByKey(key) {
//         console.log(detailsByAge[key]);
//        return detailsByAge[key];
//     }

//     const age = getFileByKey(getAge(props.birthDate));
//     console.log("age", age);
//     return <div>
//         wellcome to DevelopmentalInformation <br />
//         <br />
//          {age}</div>
// }

// const mapStateToProps = (({ user }) => {
//     return { birthDate: user.birthDate }
// })

// export default connect(mapStateToProps)(DevelopmentalInformation)