## find

find() 메소드는 배열에서 주어진 함수를 만족하는 첫 번째 요소를 반환

만약 함수를 만족하는 값이 없으면 undefined 반환

``` javascript
  arr.find(function(element, index, array) {
    // 실행 코드
  }, thisArg)
```
- element: 현재 처리 중인 배열 요소
- index : 현재 처리 중인 배열 요소의 인덱스
- array : find()을 호출한 배열
- thisArg : callback 내에서 this로 사용할 값

<br><br>

## == vs ===
== 연산자는 Equal Operator, === 연산자는 Strict Equal Operator

### == 연산자
피연산자의 값을 비교해서 같으면 true, 다르면 false 반환

두 피연산자 값이 타입이 다를 경우, 자동으로 타입을 변환한 후에 값을 비교
``` javascript
10 == 10           // true
10 == "10"         // true
1 == true          // true
0 == false         // true
true == "true"     // true
null == undefined  // true
```

<br>

### === 연산자
피연산자의 값과 자료형을 비교해서 같으면 true, 다르면 false 반환 
``` javascript
10 === 10           // true
10 === "10"         // false
1 === true          // false
0 === false         // false
true === "true"     // false
null === undefined  // false
```

<br><br>

## HTTP status code
HTTP에서 클라이언트가 서버에게 request를 보내면 서버가 response를 보냄

1XX : Informational Response
- 100(Continue) : 요청의 시작 부분이 받아들여졌고, 클라이언트는 계속 이어서 보내야 함

2XX : Success
- 200(OK) : (조회, 수정, 삭제)요청을 정상적으로 처리
- 201(Created) : 생성에 대한 요청을 받았으며 서버가 새 리소스를 작성함
- 202(Accepted) : 요청을 접수했지만 아직 처리하지 않음

3XX : Redirection
- 300(Multiple Choice) : 클라이언트가 동시에 여러 응답이 가능한 요청을 보냈을 경우 클라이언트의 선택지를 반환

4XX : Client Errors
- 400(Bad Request) : 잘못된 문법으로 요청을 보내고 있어서 서버가 이해할 수 없음
- 404(Not Found) : 요청한 URL을 찾을 수 없음

5XX : server errors
- 500(Internal Server Error) : 서버의 문제로 응답할 수 없음