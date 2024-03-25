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

<br><br>

## mini project

### 👩🏼‍💻 회원 API

#### 1. 로그인
`POST` - /login
id, pwd 값을 받아와서 모두 일치하면 로그인
- req : body(id, password)
- res : login success

#### 2. 회원 가입
`POST` - /signup
id, name, age, password 값을 받아와서 회원 정보 등록
- req : body(id, name, age, password)
- res : {id} registered successfully

#### 3. 회원 정보 조회
`GET` - /users/:id
id 값을 받아와서 일치하는 회원의 정보 반환
- req : id
- res : id, name, age


#### 4. 회원 탈퇴
`DELETE` - /users/:id
id 값을 받아와서 일치하는 회원 정보 삭제
- req : body(id, password)
- res : id is deleted

<br>

### 🖥️ 블로그 API

#### 1. 블로그 생성
`POST` - /blogs
vlogTitle 값을 받아와서 블로그 생성
- req : body(vlogTitle)
- res : {blogTitle} created successfully

#### 2. 블로그 수정
`PUT` - /blogs/:idx
idx 값을 받아와서 일치하는 블로그 이름 수정
- req : URL(idx), body(blogTitle)
- res : blog title changed successfully

#### 3. 블로그 삭제
`DELETE` - /blogs/:idx
idx 값을 받아와서 일치하는 블로그 삭제
- req : idx
- res : {blogTitle} is deleted


#### 4. 블로그 전체 조회
`GET` - /blogs
블로그가 1개 이상 있는 경우 정보 출력
- req : X
- res : 전체 블로그 정보 반환

#### 5. 블로그 개별 조회
`GET` - /blogs/:idx
idx 값을 받아와서 일치하는 블로그 정보 조회
- req : URL(idx)
- res : idx에 해당하는 블로그 정보 반환