import React, { useState } from "react";

const Main3 = () => {
  // 1 Sort arr, tìm min max
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
  // console.log(ages.sort());
  const minAge: number = ages[0];
  const maxAge: number = ages[ages.length - 1];

  // Tìm độ tuổi trung bình (Median arr)
  // console.log(ages[ages.length/2])

  //Tìm độ tuổi trung bình (Average arr)
  const ageAverage: number =
    ages.reduce((sum, age) => sum + age, 0) / ages.length;
  // console.log(Math.floor(ageAverage))

  //   Tìm Range Ages
  const rangeAge: number = maxAge - minAge;
  // console.log(rangeAge);

  // So sánh giá trị (min - average) vs (max - average) use abs();
  // let minAverage:number = Math.abs(minAge - rangeAge);
  // let maxAverage:number = Math.abs(maxAge - rangeAge);
  // console.log(minAverage);
  // console.log(maxAverage);

  // if(minAverage < maxAverage) {
  //   console.log('minAverage < maxAverage');
  // } else {
  //   console.log('minAverage > maxAverage');
  // }

  // Cắt 10 quốc gia đầu tiên
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
    // 'Vietnam'
  ];

  const newCountries: String[] = countries.slice(0, 10);

  // Tìm các quốc gia ở middle

  // const midCountries:number = countries.length/2
  // console.log(countries[Math.floor(midCountries)]);

  // Thêm 1 quốc gia để thành số chẵn
  // countries.unshift('Vietnam')

  // let totalArr = countries[countries.length/2]
  // console.log(countries);

  // let arr1 = countries.slice(0, 5)
  // arr1.unshift('Vietnam')
  // console.log(arr1);

  // let arr2 = countries.slice(5, 11)
  // console.log(arr2);

  

  // Tách mảng nếu mảng lẻ thêm việt nam vào đầu mảng lẻ

  let coun1: string[] = [];
  let coun2: string[] = [];
  let indexMiddleFloor = Math.floor(countries.length / 2);
  let indexMiddle = Math.ceil(countries.length / 2);

  // console.log(indexMiddle);
  // console.log(indexMiddleFloor);

  // coun1 = countries.slice(0, indexMiddleFloor);
  // coun2 = countries.slice(indexMiddleFloor, countries.length);
  // console.log(coun1);
  // console.log(coun2);

  // if (countries.length % 2 !== 0) {
  //   coun1.unshift("Vietnam")
  // } else {
  //   console.log(coun1);
  //   console.log(coun2);
  // }

  // Tạo prompt >= 18 và ngược lại
  let valueInput: number = Number(prompt('Enter your age:'));

  if(valueInput >= 18) {
    console.log('You are old enough to drive');
  } else {
    let result = 18 - valueInput;
    console.log(`You are left with ${result} years to drive.`);
  }

  
  return (
  <>
  </>
  )
};

export default Main3;

