import React from "react";

const Main = () => {
  //1 Loại bỏ tất cả các dấu . và , trong chuỗi và chuyển thành []
  let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
  // console.log(text.replace(/[,.]/g, '').split(' '))

  //2 - 3 In the following shopping cart add, remove, edit items

  const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

  // add cart vào đầu mảng
  // shoppingCart.unshift('Meat')
  // console.log(shoppingCart)

  // add cart vào cuối mảng
  // shoppingCart.unshift('Meat')
  // console.log(shoppingCart)

  // remove 'honey' khỏi chuỗi
  // console.log(shoppingCart.filter(_ => _ !== 'Honey'))

  // edit
  // let findIndexTea = shoppingCart.findIndex(item => item === 'Tea')
  // shoppingCart[findIndexTea] = 'Green Tea'
  // console.log(shoppingCart)

  // 4 Ở các quốc gia, hãy kiểm tra xem 'Ethiopia' có tồn tại trong mảng hay không nếu nó tồn tại, hãy in 'ETHIOPIA'. Nếu nó không tồn tại, hãy thêm vào danh sách quốc gia.

  const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];

  // let findIndex = countries.findIndex(item => item === 'Ethiopia')
  // countries[findIndex] = 'ETHIOPIA'
  // console.log(countries)

  // 5 Trong mảng webTechs, hãy kiểm tra xem Sass có tồn tại trong mảng hay không và nếu nó tồn tại, hãy in 'Sass là tiền xử lý CSS'. Nếu nó không tồn tại, hãy thêm Sass vào mảng và in mảng.
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

  //   const findSass = webTechs.filter(_ => _ === 'Sass')
  //   webTechs.push('Sass')
  //   console.log(webTechs);

//   const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
//   const backEnd = ["Node", "Express", "MongoDB"];
//   const designEnd = ['Figma', 'PTS']

//   console.log(frontEnd.concat(backEnd, designEnd));











  return <></>;
};

export default Main;
