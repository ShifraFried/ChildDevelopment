import React, { useEffect, useState } from 'react';
import { getChildVaccine } from './api/vaccineApi';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateRecordVaccine } from './api/vaccineApi'

function Vaccine(props) {

    const [vaccines, setVaccines] = useState()
    useEffect(() => {
        console.log(props.id, "props.id");
        getChildVaccine(props.id).then((data) => {
            console.log(data);
            setVaccines(data)
        })
            .catch(err => { })
    }, []);

    
    const updateAndGetRecordVaccine = async (childId, vaccineId,VaccineName) => {
        await updateRecordVaccine(childId, vaccineId).then(data => {
             alert("האם באמת התחסנת נגד"+VaccineName);//לשנות לכפתור כן .לא 
            console.log(data);
            getChildVaccine(childId).then(data => {
                console.log(data);
                setVaccines(data)
            })
        })
    }

    return <div>
        {
            vaccines && vaccines.map(vacc => <div>
                <div>
                    <div>עדיין לא חוסנת ב<div >{vacc.vaccineName} <br />
                        {(vacc.minAge.length == 1) ? <div></div> : <div>חסרות {vacc.minAge.length} מנות</div>
                        }
                        <button onClick={() => { updateAndGetRecordVaccine(props.id, vacc._id,vacc.vaccineName) }}>התחסנתי</button><br /><br />
                        <Link>?מדוע חשוב לקבל את החיסון</Link>
                    </div>
                        <br /><br /></div></div>
            </div>)
        }
        {( vaccines == null || vaccines.length==0) ? <div  className='vaccineMessage'>קבלת את כל החיסונים לגיל זה</div> : <div></div>}
    </div>
}

const mapStateToProps = (({ user }) => {
    console.log(user);
    return { id: user._id }
})

export default connect(mapStateToProps)(Vaccine)