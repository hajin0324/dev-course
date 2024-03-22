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
== 연산자는 Equal Operator, === 연산자는 Strict Equal Operation

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