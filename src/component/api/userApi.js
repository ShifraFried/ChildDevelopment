
export const signUpServer = ()=>{
    fetch(`http://localhost:3000/login?user=user1`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("error", err);
      });
}

// export const signUpServer = (id,password)=>{
//   fetch(`http://localhost:3000/login?id=${id}&password=${password}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log("error", err);
//     });
// }