// map callback function의 매개변수 : currentValue, index, array
// map 함수의 반환 값 : 배열의 각 요소에 대해 callback을 적용한 결과를 모은 새로운 배열

const arr = [1, 2, 3, 4, 5]

// arr의 값 2배 하여 mapArr에 저장
const mapArr = arr.map(curr => { 
  return curr * 2
})

console.log(mapArr)