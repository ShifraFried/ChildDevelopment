import React from 'react';
import { getKey } from '../utils/ageUtils'
import { connect } from 'react-redux';
import detailsByAge from '../assets/detailsByAge'
import { Document, Page, pdfjs } from "react-pdf";
import { useHistory } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function DevelopmentalInformation(props) {
    function getFileByKey(key) {
        console.log(detailsByAge[key]);
        return detailsByAge[key];
    }
    const history = useHistory();

    const data = getFileByKey(getKey(props.birthDate));
    function viewDocuments(p) {
        if (!data)
            return history.push("/Menu");

        alert(data.text, "text")
        console.log(data.documents[p], "data.documents[p]");
        return data.documents[p]
    }

    return (
        <div>
            <Document file={viewDocuments("development")}  >
                <Page pageNumber={1}></Page>
            </Document>

        </div>
    )
}

const mapStateToProps = (({ user }) => {
    return { birthDate: user.birthDate, firstName: user.firstName }
})

export default connect(mapStateToProps)(DevelopmentalInformation)