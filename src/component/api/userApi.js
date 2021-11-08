
export const signUpServer = (firstName, lastName, id, email, password, weightBorn, birthDate) => {
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName,
      lastName,
      id,
      email,
      password,
      weightHistory: [{ age: 0, weight: weightBorn,date:birthDate }],
      birthDate
    })
  })
}

export const logInServer = (id, password) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/login?id=${id}&password=${password}`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
        reject(err);
        //    .then(response => {
        //     if (response.status == 204) {
        //         alert("שם משתמש או סיסמא אינם תקינים")
        //     }
        //     if (response.ok) {
        //         // return response.json();
        //         alert("ok")
        //     }
        //     else {
        //         throw new Error("status Code is:" + response.status);
        //     }
        // })
      });

  })
}

export const putWeight = (id, age, weight,date) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/putWeight?id=${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ age: age, weight: weight ,date:date}),
    })
    // .then((res) => {debugger; console.log(res);})
    .then((res) => {debugger; res.json()})
    .then((data) => {debugger; resolve(data)})
    .catch((err) => {
        reject(err);
    })
  })
}

export const putBornWeight = (id, age, weight,date, weightBorn) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/putBornWeight?id=${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        weightBorn: weightBorn,
        weightToInsert: { age: age, weight: weight ,date:date}
      }),
    }).then((res) => res.json())
    .then((data) => resolve(data))
    .catch((err) => {
        reject(err);
    })
  })
}