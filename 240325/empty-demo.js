// 객체가 비었는지 확인하는 방법
const obj1 = {}
const obj2 = { message : "content"}

// 문자열도 객체
const str1 = "string"
const str2 = ""

console.log(Object.keys(obj1))  // []
console.log(Object.keys(obj2))  // [ 'message' ]

console.log(Object.keys(obj1).length)  // 0
console.log(Object.keys(obj2).length)  // 1

console.log(isEmpty(obj1))  // true
console.log(isEmpty(obj2))  // false

console.log(isEmpty(str1))  // false
console.log(isEmpty(str2))  // true

function isEmpty(obj) {
  if (obj.constructor === Object) {
    if (Object.keys(obj).length === 0) {
      return true 
    } else {
      return false
    }
  }
}