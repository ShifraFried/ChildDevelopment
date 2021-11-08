import moment from 'moment'

let month = 1000 * 60 * 60 * 24 * 30;
const ageKey = [{ "key": 1, "fromAge": 0, "untilAge": month },
{ "key": 2, "fromAge": month, "untilAge": month * 2 }]
export const getKey = (birthDate) => {
    var age = (moment(new Date()).diff(birthDate));
    for (let i = 0; i < ageKey.length; i++) {
        if ((age) < ageKey[i].untilAge && age > ageKey[i].fromAge) {
            console.log("age", age)
            console.log("ageKey[i].key", ageKey[i].key)
            return ageKey[i].key;
        }
    }
    alert("מצטערים לא קיים מידע התפתחותי לגיל זה")
}


//יממה
//86,400,000
//60*60*24*1000



