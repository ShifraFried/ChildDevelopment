export const createItem = (id,newItem)=> {
    let data = new FormData();
    data.append('image', newItem.imageUrl);
    data.append('name', newItem.imageName);
    console.log(data,"data");
    fetch(`http://localhost:3000/createItem/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem),
    }).then(response => {
        // TODO : Do something
    }).catch(err => {
        // TODO : Do something
    });
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