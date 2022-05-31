import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import './heightWeight.css'
import { withRouter } from 'react-router-dom';


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

    const st = (agePart, str) => {
        return `  ${agePart ? str + agePart : ' '}`
    }

    const returnToForm = () =>{
        props.history.push('/HeightWeight');
    }

    return (
        <div className='tableHistory'>
            <h1 className='titleHistory'>היסטורית הגדילה שלי</h1>
            <table class="table tableCss" cellspacing="0">
                <thead>
                    <tr>
                        <td>תאריך מדידה<svg className='iconTitle' width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0657 1.22485C5.88204 1.22485 1.48621 5.56457 1.48621 18.58C1.48621 31.5954 5.88204 35.9351 19.0657 35.9351C32.2494 35.9351 36.6452 31.5954 36.6452 18.58" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.3731 4.14001C31.4859 2.4908 28.6029 2.66342 26.9323 4.52651C26.9323 4.52651 18.6291 13.7857 15.7499 16.9997C12.8668 20.2118 14.9802 24.6491 14.9802 24.6491C14.9802 24.6491 19.739 26.1369 22.5783 22.9699C25.4195 19.8028 33.7646 10.4986 33.7646 10.4986C35.4351 8.63546 35.2584 5.78922 33.3731 4.14001Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.784 6.94873L31.6162 12.9208" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
                        <td>גיל בזמן המדידה <svg className='iconTitle1' width="32" height="43" viewBox="0 0 32 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7581 42.0518C7.78286 42.0518 0.972168 40.8265 0.972168 35.9197C0.972168 31.0129 7.73965 26.4832 15.7581 26.4832C23.7334 26.4832 30.5441 30.969 30.5441 35.8758C30.5441 40.7806 23.7766 42.0518 15.7581 42.0518Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7425 19.6837C20.9763 19.6837 25.2182 15.4958 25.2182 10.3289C25.2182 5.16194 20.9763 0.972168 15.7425 0.972168C10.5088 0.972168 6.26483 5.16194 6.26483 10.3289C6.24721 15.4784 10.4597 19.6662 15.6758 19.6837C15.6993 19.6837 15.7209 19.6837 15.7425 19.6837Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
                        <td> משקל <svg className='iconTitle' width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0184 16.0249V28.6862" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8204 9.96533V28.6876" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.4776 22.7158V28.6871" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 19.3843C1 5.57218 5.70612 0.966797 19.8204 0.966797C33.9347 0.966797 38.6408 5.57218 38.6408 19.3843C38.6408 33.1965 33.9347 37.8019 19.8204 37.8019C5.70612 37.8019 1 33.1965 1 19.3843Z" stroke="#EE2A7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
                    </tr>
                </thead>
                <tbody>
                    {props.weightHistory && props.weightHistory.map((hWeight) => (
                    <tr>
                        <td>{hWeight.date.split('T')[0]}</td>
                        <td>{st(moment.duration(hWeight.age)._data.years, `שנים `) + st(moment.duration(hWeight.age)._data.months, `חודשים `) + st(moment.duration(hWeight.age)._data.days, `ימים `)}</td>
                        <td>{hWeight.weight}</td>
                    </tr>
                )
                )}
                </tbody>
            </table>
            <button className='buttonForm' onClick={returnToForm}>חזרה למילוי פרטים</button>
        </div>
    )
}
const mapStateToProps = (({ user }) => {
    console.log(user);
    return { id: user.id, weightHistory: user.weightHistory }
})

export default withRouter(connect(mapStateToProps)(weightHistory))