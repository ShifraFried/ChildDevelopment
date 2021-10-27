
export const getChildVaccine = (id) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/getChildVaccine/${id}`)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => {
          reject(err);
        });
  
    })
  }

  export const updateRecordVaccine= (idChild,idVaccine) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/updateRecordVaccine/`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify({
          idChild,
          idVaccine

        }),
      }).then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
          reject(err);
      })
    })
  }
