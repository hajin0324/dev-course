## forEach

forEach() 메소드는 배열의 각 요소에 대해 주어진 함수를 한 번씩 실행

``` javascript
  arr.forEach(function(element, index, array) {
    // 실행 코드
  }, thisArg)
```
- element : 현재 처리 중인 배열 요소
- index : 현재 처리 중인 배열 요소의 인덱스
- array : forEach()를 호출한 배열
- thisArg : callback 내에서 this로 사용할 값

<br><br>

## map 함수

map() 메소드는 배열의 각 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

``` javascript
  arr.map(function(currentValue, index, array) {
    // 실행 코드
  }, thisArg)
```
- currentValue : 현재 처리 중인 배열 요소
- index : 현재 처리 중인 배열 요소의 인덱스
- array : map()을 호출한 배열
- thisArg : callback 내에서 this로 사용할 값

<br><br>

## REST API

### 개별 사용자 삭제
`DELETE` - /users/:id

id 값을 받아와서 그 id에 해당하는 사용자 삭제
- req : params.id(사용자 아이디)
- res : id is deleted

<br>

### 전체 사용자 삭제
`DELETE` - /users

사용자 데이터 전체 삭제
- req : X
- res : all users deleted

<br>

### 개별 사용자 수정
`PUT` - /users/:id

id 값을 받아와서 그 id에 해당하는 사용자의 비밀번호 변경
- req : params.id, body(password)
- res : password changed successfully