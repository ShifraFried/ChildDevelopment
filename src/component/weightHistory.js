import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'


function weightHistory(props) {

    // const str = (ageHistory) => {
    //     let age = moment.duration(ageHistory)
    //     let str = [{

        
    //        "days" :` ${age._data.years ? age._data.years + ' שנים' : ''}  `,
    //         `  ${age._data.months age._data.months + ' חודשים' : ' '}`,
    //         `   ${age._data.days ? age._data.days + ' ימים' : ' '} `,
    //         `   ${!age._data.days && !age._data.months && !age._data.years 'משקל לידה' : ' '}`
    //    } ]
    //     return str
    // }

    const st = (agePart,str)=>{
       return `  ${agePart? str+ agePart : ' '}` 
    }

return (
    <div>
        <h1>היסטורית הגדילה שלי</h1>
        <table>
            <tr>
                <td>תאריך מדידה</td>
                <td>גיל בזמן המדידה</td>
                <td>משקל</td>
            </tr>
            {props.weightHistory&&props.weightHistory.map((hWeight) => (
                <tr>
                    <td>{hWeight.date.split('T')[0]}</td>
                    <td>{st(moment.duration(hWeight.age)._data.years,`שנים `)+st(moment.duration(hWeight.age)._data.months,`חודשים `)+st(moment.duration(hWeight.age)._data.days,`ימים `)}</td>
                    <td>{hWeight.weight}</td>
                </tr>
            )
            )}
        </table>
    </div>
)
}
const mapStateToProps = (({ user }) => {
    console.log(user);
    return { id: user.id, weightHistory: user.weightHistory }
})

export default connect(mapStateToProps)(weightHistory)