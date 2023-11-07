// 01. console.log('Hello World!')

// 02. let asSign = 10; console.log(asSign)

// 03. console.log('Hello World!' + ' Javascript')

// 04. 5와 10을 합치는 함수를 만들라
// function sum (a, b){
//   return a + b;
// }
// console.log(sum(5, 10))

// 05. 1부터 10까지의 숫자 출력
// for(i=1; i<=10; i++){
//   console.log(i);
// }

// 06. 짝수와 홀수를 구분하는 if문
// for(i=1; i<=10; i++){
//   if( i%2 === 0){
//     console.log(`짝수 : ${i}`);
//   } else {
//     console.log(`홀수 : ${i}`);
//   }
// }

// 07. 자바스크립트의 null과 undifined의 차이점
// let a = typeof(null);
// let b = typeof(undefined);
// console.log(a, b)
// null : 객체. 어떤값이 의도적으로 비어 있음을 표현 / 불리언 연산에서는 거짓
// undefined : 문법적으로 유효함에도 불구 식이 올바른 값을 가지고 있지 않은 상태이다. 미정의 값은 빈 문자열, 불리언의 "false", 또는 정의되었으나 비어있는 값과는 구별된다


// 08. 자바스크립트의 식별자로 사용될수 있는 3가지 예
// 식별자 : 자바스크립트에서 이름을 붙일 때 사용하는 단어
// _pokemon / $pokeMon / pokemon123


// 09. var let const의 차이점
// var : 전역 범위 또는 함수 범위 / 업데이트 및 재선언 O
// let : 블록 범위 / 업데이트 O, 재선언 X
// const : 블록 범위 / 상수 선언 / 업데이트 X, 재선언 X



// 10. 자바스크립트의 주석을 어떻게 작성하는가?
// (1) - "//"
// (2) - "/** */"



// 11. vscode에서 지원하는 jsdoc의 기능을 설명하시오
// JSDoc은 자바스크립트 소스 코드 파일들에 주해를 달기 위해 사용하는 마크업 언어이다. JSDoc을 포함하는 주석을 사용하는 프로그래머들은 자신들이 작성하는 코드의 API를 설명하는 설명 문서를 추가할 수 있다.
// (1) - VS Code에서 순수한 자바스크립트 소스코드에 다음과 같이 @ts-check를 주석으로 추가하면 TypeScript처럼 타입 및 에러 체크가 가능하다.
// (2) - /** ... */ 주석 사이에 API 설명하는 문서 생성기



// 12. use strict를 쓰는 이유 / 사용법
// 암묵적인 "느슨한 모드(sloppy mode)"를 해제하고,
// 명시적인 "엄격 모드(Strict Mode)"를 사용하는 방법이다.
// 'use strict`; 조건식



// 13. 자바스크립트의 대소문자 구분하는 예
// (1) - css에서 띄워쓰기나 하이픈이 들어가 있는 변수를 script로 바꿀때 
// (2) - 클래스 선언시에 앞글자를 대문자로 넣는다 동일한 종류의 객체를 여러개 생성할 때
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }



// 14. 자바스크립트의 데이터 타입
// (1) - null
// (2) - undifined
// (3) - number
// (4) - variation
// (5) - string
// (6) - symbol
// (7) - boolean
// (8) - object
// (9) - array



// 15. 조건문에서 truty와 falsy 개념은 무엇인가? 예시를 들어보세요
// Truthy: true 같은거... Falsy: false 같은거...

  // (1) Truthy - 
  // 모든 값은 default가 Truthy
  // 명시된 True
  // 0이 아닌 모든 숫자는
  // 비어있지 않은 문자열
  // 객체
  // 비어있지 않은 배열
  // 정의된 함수는  
  // (2) Falsy -
  // 명시된 false
  // null
  // undefined
  // 숫자  0
  // 숫자 -0
  // 숫자가 아닌 NaN(Not-a-Number)
  // 빈문자열 : "" 또는 ''

// 16. typeof 연산자를 사용해 변수의 타입을 확인하는 예제 코드를 작성하세요
//   let variation = "";
//   if(typeof(variation)==="string"){
//     console.log('error')
//   }

// 17. 자바스크립트에서 "==" 와 "==="의 차이점을 설명해 보세요
//   "==" 문자열과 숫자를 알아서 해석을 해버립니다 ex) 1=='1' true
//   "===" 문자열과 숫자를 알아서 해석하지 않습니다 ex) 1=='1' false

// 18. 변수 X에 값 10을 할당하고, x의 값이 10인지 확인하는 코드를 작성해보세요
//   let varation = 10;
//   if(varation===10){
//     console.log('True')
//   }else{console.error('false') }

19. +, -, *, /, 연산자를 사용해 간단한 산술 연산을 하는 코드를 작성하세요
  function add (a,b){
    console.log(a + b)
  }
  function mino (a,b){
    console.log(a - b)
  }
  function mult (a,b){
    console.log(a * b)
  }
  function divi (a,b){
    console.log(a / b)
  }
  
  function calc(callback){
    let a = 1
    let b = 2
    callback(a,b)
  }
  calc(add)
  calc(mino)
  calc(mult)
  calc(divi)












