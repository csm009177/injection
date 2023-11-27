//* 01. console.log('Hello World!')

//* 02. let asSign = 10; console.log(asSign)

//* 03. console.log('Hello World!' + ' Javascript')

//* 04. 5와 10을 합치는 함수를 만들라
// function sum (a, b){
//   return a + b;
// }
// console.log(sum(5, 10))

//* 05. 1부터 10까지의 숫자 출력
// for(i=1; i<=10; i++){
//   console.log(i);
// }

//* 06. 짝수와 홀수를 구분하는 if문
// for(i=1; i<=10; i++){
//   if( i%2 === 0){
//     console.log(`짝수 : ${i}`);
//   } else {
//     console.log(`홀수 : ${i}`);
//   }
// }

//* 07. 자바스크립트의 null과 undifined의 차이점
// let a = typeof(null);
// let b = typeof(undefined);
// console.log(a, b)
// null : 객체. 어떤값이 의도적으로 비어 있음을 표현 / 불리언 연산에서는 거짓
// undefined : 문법적으로 유효함에도 불구 식이 올바른 값을 가지고 있지 않은 상태이다. 미정의 값은 빈 문자열, 불리언의 "false", 또는 정의되었으나 비어있는 값과는 구별된다


//* 08. 자바스크립트의 식별자로 사용될수 있는 3가지 예
// 식별자 : 자바스크립트에서 이름을 붙일 때 사용하는 단어
// _pokemon / $pokeMon / pokemon123


//* 09. var let const의 차이점
// var : 전역 범위 또는 함수 범위 / 업데이트 및 재선언 O
// let : 블록 범위 / 업데이트 O, 재선언 X
// const : 블록 범위 / 상수 선언 / 업데이트 X, 재선언 X



//* 10. 자바스크립트의 주석을 어떻게 작성하는가?
// (1) - "//"
// (2) - "/** */"



//* 11. vscode에서 지원하는 jsdoc의 기능을 설명하시오
// JSDoc은 자바스크립트 소스 코드 파일들에 주해를 달기 위해 사용하는 마크업 언어이다. JSDoc을 포함하는 주석을 사용하는 프로그래머들은 자신들이 작성하는 코드의 API를 설명하는 설명 문서를 추가할 수 있다.
// (1) - VS Code에서 순수한 자바스크립트 소스코드에 다음과 같이 @ts-check를 주석으로 추가하면 TypeScript처럼 타입 및 에러 체크가 가능하다.
// (2) - /** ... */ 주석 사이에 API 설명하는 문서 생성기



//* 12. use strict를 쓰는 이유 / 사용법
// 암묵적인 "느슨한 모드(sloppy mode)"를 해제하고,
// 명시적인 "엄격 모드(Strict Mode)"를 사용하는 방법이다.
// 'use strict`; 조건식



//* 13. 자바스크립트의 대소문자 구분하는 예
// (1) - css에서 띄워쓰기나 하이픈이 들어가 있는 변수를 script로 바꿀때 
// (2) - 클래스 선언시에 앞글자를 대문자로 넣는다 동일한 종류의 객체를 여러개 생성할 때
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }



//* 14. 자바스크립트의 데이터 타입
// (1) - null
// (2) - undifined
// (3) - number
// (4) - variation
// (5) - string
// (6) - symbol
// (7) - boolean
// (8) - object
// (9) - array



//* 15. 조건문에서 truty와 falsy 개념은 무엇인가? 예시를 들어보세요
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

//* 16. typeof 연산자를 사용해 변수의 타입을 확인하는 예제 코드를 작성하세요
//   let variation = "";
//   if(typeof(variation)==="string"){
//     console.log('error')
//   }

//* 17. 자바스크립트에서 "==" 와 "==="의 차이점을 설명해 보세요
//   "==" 문자열과 숫자를 알아서 해석을 해버립니다 ex) 1=='1' true
//   "===" 문자열과 숫자를 알아서 해석하지 않습니다 ex) 1=='1' false

//* 18. 변수 X에 값 10을 할당하고, x의 값이 10인지 확인하는 코드를 작성해보세요
//   let varation = 10;
//   if(varation===10){
//     console.log('True')
//   }else{console.error('false') }

//* 19. +, -, *, /, 연산자를 사용해 간단한 산술 연산을 하는 코드를 작성하세요
//   function add (a,b){
//     console.log(a + b)
//   }
//   function mino (a,b){
//     console.log(a - b)
//   }
//   function mult (a,b){
//     console.log(a * b)
//   }
//   function divi (a,b){
//     console.log(a / b)
//   }
  
//   function calc(callback){
//     let a = 1
//     let b = 2
//     callback(a,b)
//   }
//   calc(add)
//   calc(mino)
//   calc(mult)
//   calc(divi)

//* 20. 10을 3으로 나눈 마머지를 구하는 코드를 작성해보세요
  
// function div(a,b){
//   console.log(a%b)
//   console.log(Math.abs(a - (b * (a / b | 0))))
// }
// div(20,3)

// explain : 
// 그 다음 a / b | 0을 사용하여 
// 비트 OR 연산자(|)를 이용하면 
// 소수 부분을 제거하고 정수 부분만 남습니다. 
// 이것은 나눈 몫을 구하는 효과를 가지며, 
// 그 결과를 다시 b와 곱합니다.

//* 21. x가 y보다 큰지 확인하는 조건식을 작성해 보세요
// function checkMount(x, y) {
//   if(x>y){ console.log('x win')
//   } if(x<y){ console.log('y win')
//   } else { console.log('x y same')
//   }
// }
// checkMount(2,3)

//* 22. x가 y와 같은지, 그리고 z가 0이 아닌지 확인하는 복합 조건식을 작성해보세요
// function checkMount(x, y, z) {
//   if(x===y && z!==0){ 
//     console.log('true')
//   } else { 
//     console.log('false')
//   }
// }
// checkMount(2,2,1)


//* 23. x를 y로 나눈 몫을 구하는 코드를 작성해보세요

// function divVal(x, y){
//   return console.log(x / y)
// }
// divVal(2,2)

//* 24. 두 변수 x,y 값을 서로 교환하는 코드를 작성해보세요
// function chng(x, y){
//   console.log([x, y] = [y, x]);
// }
// chng("befor", "after")

//* 25. while문을 사용해 1부터 10까지의 수를 출력하는 코드를 작성하세요
// function stack(i){
//   while (i <= 10) {
//       console.log(i);
//       i = i + 1
//   }
// }
// stack(1)

//* 26. switch 문을 사용해 변수가 어떤 값인지 분기하는 코드를 작성하세요
// function selfruit(fruit){
//   switch (fruit) {
//       case "apple"  : console.log("Selected fruit is apple.");
//           break;
//       case "banana" : console.log("Selected fruit is banana.");
//           break;
//       default       : console.log("Unknown fruit.");
//   }
// }
// selfruit("yami")

//* 27. try/catch문을 사용해 예외 처리하는 코드를 작성하세요 

// function compare(a, b){
//   try {                 // 예외가 발생할 수 있는 코드
//     if(typeof(a)==="number" && typeof(b)==="number"){
//       if(a>b){
//         console.log("big a")
//       }else if(a<b){
//         console.log("big b")
//       }else if(a=b){
//         console.log("a and b is same")
//       }
//     }
//     if(typeof(a)!=="number" || typeof(b)!=="number"){
//       throw new Error("에러발생")
//     }
//   } catch {       // 예외가 발생했을 때 실행되는 코드
//     console.log("plz, put number")
//   } finally {           // 예외 발생 여부와 상관없이 항상 실행되는 코드
//     console.log("compare is done")
//   }
// }
// compare(1, "s")

//* 28. continue문을 사용해 짝수만 출력하는 코드를 작성하세요
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) { // 2로 나눈 나머지가 0과 같지 않으면
//     continue;        // 지나가고 
//   }
//   console.log(i);    
// }

//* 29. break문을 사용해 반복문을 중단하는 코드를 작성하세요 
// const num = [1, 2, 3, 4];

// for (let i = 0; i < num.length; i++) {
//   if (num[i] < 3) {
//     console.log(num[i]);
//     break;
//   }
// }

//* 30. 비어있는 객체를 선언하는 코드를 작성하세요
// const obj = {}
// console.log(obj)

//* 31. 속성 'address'가 대덕대로, 'number'가 182인 객체를 생성하세요
// const academy = {
//   address : "대덕대로",
//   number : 182
// }
// console.log(academy.address)
// console.log(academy.number)

//* 32. 객체의 속성에 접근하는 두가지 방법을 코드로 작성하세요 
// const academy = {
//   address : "대덕대로",
//   number : 182
// }
// // 1.
// console.log(academy.address)
// console.log(academy.number)
// // 2.
// console.log(Object.values(academy))



//* 33. 객체에 새로운 속성을 동적으로 추가하는 코드를 작성하세요 
//* 34. 객체의 속성을 삭제하는 코드를 작성하세요
//* 35. 객체의 모든 속성을 순회하며 출력하는 코드를 작성하세요
//* 36. this 키워드에 대해 성명하고 사용 예를 만드세요
//* 37. 비어있는 배열을 선언하는 코드를 작성하세요
//* 38. 1부터 5까지의 숫자를 원소로 갖는 배열을 선언하는 코드를 작성하세요
//* 39. 배열에 새로운 원소를 추가하는 코드를 작성하세요
//* 40. 배열에서 특정 원소를 제거하는 코들르 작성하세요
//* 41. 배열의 길이를 확인하는 코드를 작성하세요
//* 42. 배열의 모든 원소를 순회하여 출력하는 코드를 작성하세요
//* 43. 배열의 특정 원소의 인덱스를 찾는 코드를 작성하세요
//* 44. 두 수를 더하는 함수를 선언하는 코드를 작성하세요
//* 45. 함수 표현식과 함수 선언식의 차이점을 설명하세요
//* 46. 화살표 함수를 사용해 두 수를 곱하는 함수를 선언한느 코드를 작성하세요
//* 47. 콜백 함수를 사용하는 코드를 작성하세요
//* 48. 클로저에 대해 설명하고 예를 들어보세요
//* 49. 함수 매개변수 기본값을 설정하는 코드를 작성하세요 
//* 50. 비어있는 클래스를 선언하는 코드를 작성하세요
//* 51. 생성자를 가진 클래스를 선언하는 코드를 작성하세요
//* 52. 메서드를 가진 클래스를 선언하는 코드를 작성하세요
//* 53. get과 set 접근자에 대해 설명하고 사용 예를 들어보세요
//* 54. 클래스의 인스턴스(instance)를 생성하는 코드를 작성하세요
//* 55. 모듈을 만들고 그것을 내보내는 코드를 작성하세요
//* 56. 모듈에서 함수를 하나 내보내는 코드를 작성하세요
//* 57. 다른 모듈을 임포트하는 코드를 작성하세요
//* 58. 모듈에서 여러 개의 항목을 내보내는 코드를 작성하세요
//* 59. cjs방식과 ems 방식의 차이점을 설명하세요
//* 60. 모듈(module)의 사용 목적과 장점을 설명하세요
//* 61. Data 객체를 사용해 현재 시간을 출력하는 코드를 작성하세요
//* 62. JSON객체를 사용해 객체를 JSON문자열로 변환하는 코드를 작성하세요
//* 63. JSON객체를 사용해 JSON문자열을 객체로 변환하는 코드를 작성하세요
//* 64. set객체를 사용해 중복을 허용하지 않는 컬렉션을 생성하는 코드를 작성하세요
//* 65. map객체를 사용해 키-값 쌍의 컬렉션을 생성하는 코드를 작성하세요
//* 66. 동기와 비동기에 대해 비유를 들어 차이점을 설명하세요
//* 67. setTimeout을 사용해 1초 후에 'Hello, World'를 출력하는 코드를 작성하세요
//* 68. promise를 선언하고 사용하는 코드를 작성해보세요
//* 69. promise가 해결(fulfilled)되거나 거부된(rejected) 경우를 제작하세요
//* 70. javascript에서 프로미스 체인을 구현하는 코드를 작성해보세요
//* 71. async/await를 사용해 비동기 코드를 처리한느 목적을 설명하세요
//* 72. async/await와 promise의 차이점을 설명하세요
//* 73. promise.all을 사용해 여러 promise를 동시에 실행하는 코드를 작성해보세요
//* 74. 비동기 함수에서 예외를 처리한느 방법을 설명하고 예를 들어보세요
//* 75. proxy객체를 생성하는 코드를 작성해보세요
//* 76. proxy를 사용해 객체의 속성에 대한 접근을 제어하는 코드를 작성해보세요
//* 77. DOM요소를 선택하는 코드를 작성해보세요
//* 78. 선택한 DOM요소의 텍스트를 변경하는 코드를 작성해보세요
//* 79. DOM요소에 이벤트 리스너를 추가하는 코드를 작성하세요
//* 80. 웹 브라우저의 콘솔에 로그를 출력하는 코들르 작성하세요
//* 81. Local storage에 데이터를 저장하고 검색하는 코드를 작성해보세요
//* 82. Node.js에서 파일을 읽는 코드를 작성해보세요
//* 83. Node.js에서 http 서버를 생성하는 코드를 작성해보세요
//* 84. Node.js에서 이벤트를 발생시키고 그것을 처리하는 코드를 작성해보세요
//* 85. Express.js를 사용해 http 서버를 생성하는 코드를 작성하세요
//* 86. Express.js에서 라우팅을 처리하는 코드를 작성해보세요
//* 87. Node.js에서 환경변수를 사용하는 방법을 설명하고 예로 들어보세요
//* 88. JavaScript에서 문자열을 숫자로 변환하는 방법을 예로 들어보세요
//* 89. Node.js에서 비동기 함수를 사용하는 예를 작성해보세요
//* 90. JavaScript에서 map, filter, reduce 함수를 사용하는 예를 들어보세요
//* 91. Node.js에서 fs 모듈을 사용하여 디렉토리를 생성하는 코드를 작성해보세요
//* 92. Node.js에서 path 모듈을 사용하여 파일 경로를 조작하는 코드를 작성해보세요 
//* 93. Express.js에서 정적 파일을 호스팅하는 방법을 설명하고 예를 들어보세요
//* 94. Node.js에서 npm 패키지를 설치하고 사용하는 코드를 작성해보세요
//* 95. JavaScript에서 프로토타입 기반 상속을 구현하는 코드를 작성해보세요
//* 96. JavaScript에서 삼항 연산자를 사용하는 예를 들어보세요
//* 97. JavaScript에서 문자열 템플릿 리터럴을 사용하는 코드를 작성해보세요
//* 98. JavaScript에서 배열과 객체의 차이점을 설명하세요
//* 99. JavaScript에서 배열과 객체의 공통점을 설명하세요
//*100. JavaScript에서 전개연산자(srpead Operator)를 사용하는 코드를 작성하세요
//*101. JavaScript에서 배열을 얕은복사와 깊은 복사에 대한 예를 들어보세요






