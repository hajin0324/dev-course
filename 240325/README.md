## 빈 객체 확인하기

### Object.keys()
Object.keys() 함수는 객체의 프로퍼티들 중에서 key 값만 묶어서 배열로 반환
``` javascript
function isEmptyOb(obj) {
  if (obj.constructor === Object && Object.keys(obj).length === 0) { 
    return true
  }
  return false
} 
```
`obj.constructor === Object` : 데이터가 객체인지 확인

`Object.keys(obj).length === 0` : 객체의 key 목록의 길이가 0이면 비어있는 객체

<br> 

### for ... in
hasOwnProperty() 함수는 객체가 특정 프로퍼티를 가지고 있으면 true, 없으면 false를 반환
``` javascript
for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    return false
  }
  return true
}
```

<br>

### lodash library
Lodash는 array, collection, date 같은 데이터의 구조를 간편하게 함수형으로 다룰 수 있게 해주는 라이브러리

_.isEmpty() 함수는 object, collection, map, set이 비어있는지 확인하여 값이 있다면 true, 없다면 false를 반환
``` javascript
function isEmpty(obj) {
  if (obj.constructor === Object && _.isEmpty(obj)) {
    return true
  }
  return false
}
```