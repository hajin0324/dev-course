// == : 자료형은 비교하지 않고 값만 비교
// === : 값과 자료형을 모두 비교

console.log(10 == 10)   // true
console.log(10 === 10)  // true

console.log(10 == "10")   // true
console.log(10 === "10")  // false

console.log(1 == true)   // true
console.log(1 === true)  // false

console.log(0 == false)   // true
console.log(0 === false)  // false

console.log(true == "true")   // true
console.log(true === "true")  // fasle

console.log(null == undefined)   // true
console.log(null === undefined)  // false