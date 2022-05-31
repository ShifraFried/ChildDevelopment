
//לסדר פונקציה
export const postPicture = async (data) => {
  console.log(data, "data");
  //נפילה בשורה זו
  await fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...data
    })
  })
}


export const getChildPictures = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/getChildPictures/${id}`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
        reject(err);
      });

  })
}