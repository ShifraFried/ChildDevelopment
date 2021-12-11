import React from 'react';
import { getKey } from '../utils/ageUtils'
import { connect } from 'react-redux';
import detailsByAge from '../assets/detailsByAge'
import pdf from '../assets/firstMonth.pdf'
import { Document, Page, pdfjs } from "react-pdf";
import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


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
            <Document file={viewDocuments("development")}  >
                <Page pageNumber={1}></Page>
            </Document>
           
        </div>
    )
}

const mapStateToProps = (({ user }) => {
    return { birthDate: user.birthDate, firstName: user.firstName }
})

export default connect(mapStateToProps)(DataExample)