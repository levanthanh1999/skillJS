import React from "react";

const Main3 = () => {
  // 1 Sort arr, tìm min max
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
  console.log(ages.sort());
  const minAge = ages[0];
  const maxAge = ages[ages.length - 1];

  // Tìm độ tuổi trung bình (Median arr)
  // console.log(ages[ages.length/2])

  //Tìm độ tuổi trung bình (Average arr)
  const ageAverage = ages.reduce((sum, age) => sum + age, 0) / ages.length;
  // console.log(Math.floor(ageAverage))

  //   Tìm Range Ages
  const rangeAge = maxAge - minAge;
  // console.log(rangeAge);

  let minAverage = minAge - ageAverage;
  let maxAverage = maxAge - ageAverage;

  if(minAverage < maxAverage) {
    console.log('minAverage < maxAverage');
  } else {
    console.log('minAverage < maxAverage');
  }










  return <></>;
};

export default Main3;
