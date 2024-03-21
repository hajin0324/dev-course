// forEach callback function의 매개변수 : element, index, array

// forEach - Array
const arr = ['a', 'b', 'c', 'd', 'e']

// arr의 element 하나씩 출력
arr.forEach(elem => { 
  console.log(elem)
})

// arr의 element, index 출력
arr.forEach((elem, idx) => {
  console.log(`index : ${idx}, element : ${elem}`)
})

// forEach - Map
let map = new Map()
map.set("lee", 24)
map.set("kim", 28)
map.set("park", 40)

// map의 element(value) 하나씩 출력
map.forEach(value => {
  console.log(value)
})

// map의 element(value), index(key) 출력
map.forEach((value, key) => {
  console.log(`key : ${key}, value : ${value}`)
})