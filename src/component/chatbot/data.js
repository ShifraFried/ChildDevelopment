
export const getData = async () => {
  console.log("in get data");
    let data = await fetch(
      `C:/שיפי/פרויקט/project/src/assets/vaccineTable.pdf`
    );
    // data = await data.json();
    return data.data;
  };
  