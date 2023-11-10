
const studentList = [ "김우진", "김현", "방승희", "홍문기"];
//studentList length : 17
const pokemonList = ["피카츄", "라이츄", "파이리", "꼬부기"];
// pokemonList length : 4 

// 문항.1
// 전체 명단을 문자열로 출력하여, 모든 학생의 이름이 쉼표로 구분되도록 하려고 합니다. 이를 구현하는 코드를 작성하세요.
// const a=studentList.concat(pokemonList)
// console.log(a) // 전체 명단 
// const b=a.join(',') // ','로 구분
// console.log(b)
// const c=a.join('/') // '/'로 구분
// console.log(c)

// 문항.2
// 명단에서 마지막 학생이 전학을 갔습니다. 이 학생을 명단에서 제거하고, 그 학생의 이름을 출력하는 코드를 작성하세요.
// const a = studentList.pop()
// console.log(studentList)
// console.log(a)

// 문항.3
// 명단 중 세 번째 학생이 전학을 갔고, 새 학생이 그 자리에 왔습니다. 기존 학생을 제거하고 새 학생을 추가하는 코드를 작성하세요.

//방법1
// const a = studentList.splice(0,2) // 명단에서 앞부분 자르기
// console.log(a)                  // [ '김우진', '김현' ]
// console.log(studentList)        // [ '방승희', '홍문기' ] -
// const b =studentList.shift()      // 잘린 배열의 첫 학생을 뺀다
// console.log(b)                  // 방승희
// console.log(studentList)        // [ '홍문기' ]
// const c =studentList.unshift("N") // 잘린 배열에 "N" 학생 추가
// console.log(c)                  // 2
// console.log(studentList)        // [ 'N', '홍문기' ]
// const d = a.concat(studentList);  // 명단에서 잘린 앞부분과 "N"이 추가된 배열을 합치기
// console.log(d)                  // [ '김우진', '김현', 'N', '홍문기' ]

// 방법2
// studentList[2] = "N";
// console.log(studentList)


// 문항.4
// 명단의 순서를 역순으로 바꾸고자 합니다. 이를 위한 코드를 작성하세요.
//방법1
// const a = studentList.reverse()
// console.log(a)

// 방법2
// const newList = []
// for(i=0; i<studentList.length; i++){
//   const a = studentList.pop()
//   newList = String(a)
//   console.log(newList)
// }

// 문항.5
// 임의의 학생(본인이름) 명단에서 몇 번째에 있는지 찾아서 그 위치를 출력하는 코드를 작성하세요.
// 방법1
// const a = studentList.indexOf("김현")
// console.log(a)              // 몇번째인지
// studentList[a] = a;         // 그 위치를 표시
// console.log(studentList)

// 문항.6
// 명단에 같은 이름(성씨제외)을 가진 학생이 두 명 있습니다. 이 중 마지막에 있는 학생의 위치를 찾아 출력하는 코드를 작성하세요.
// 방법1
// const newstudentList = [ "김우진", "김현", "방승희", "오승민", "홍문기", "유승민" ];

// const smList = [];
// newstudentList.forEach(element => {
//   if(element[1]==="승"&&element[2]==="민"){
//     smList.push(element)
//   }
// });
// console.log(smList.pop())
// // 방법2
// const smList2 = []
// newstudentList.forEach(element => { 
//   if(element.includes("승민")){
//     smList2.push(element)
//   }
// })
// console.log(smList2.pop())


// 문항.7
// 명단에서 성씨가 ‘김’씨인 학생의 이름을 찾아 출력하는 코드를 작성하세요.
//방법1
// const kimList = [];
// studentList.forEach(element=>{
//   if(element[0]==="김"){
//     kimList.push(element)
//   }
// })
// console.log(kimList);

// // 방법2 
// const kimList2 = [];

// for (const i of studentList) {
//   if (i.includes("김")) {
//     kimList2.push(i);
//   }
// }
// console.log(kimList2);

// 문항.8
// 기초데이터(studentList, pokemonList) 두 개의 명단을 합쳐 전체 학생 명단을 만들려고 합니다. 두 명단을 결합하는 코드를 작성하세요.
// const a = studentList.concat(pokemonList)
// console.log(a)

// 문항.9
// 모든 학생의 이름 앞에 '학생_'을 붙여 새로운 형식으로 명단을 만드는 코드를 작성하세요.
// const newList = []
// studentList.forEach(Element=>{
//   newList.push("학생_"+Element)
// })
// console.log(newList)

// 문항.10
// 명단에 있는 모든 학생들의 이름을 하나의 문자열로 연결하여 출력하는 코드를 작성하세요.
// console.log(studentList.join(""))

// 문항.11
// 모든 학생들의 이름이 세 글자인지 확인하는 코드를 작성하세요.
let count = 0;
studentList.forEach(element => {
  if (element.length === 3) {
    console.log(element.length)
    count = count + 1;
  } else {
    console.log(element.length)
  }
});
if (count === 3) {
  console.log(true);
} else {
  console.log(false);
}
console.log(count)


// 문항.12
// 명단에서 마지막 학생이 전학을 갔습니다. 이 학생을 명단에서 제거하고, 그 학생의 이름을 출력하는 코드를 작성하세요.

// 문항.13
// 명단 중에서 두 번째부터 네 번째 학생까지만 따로 명단을 만들려고 합니다. 이 부분 명단을 복사하여 새로운 배열을 만드는 코드를 작성하세요.

// 문항.14
// 명단에서 이름에 '승'을 포함하는 모든 학생들의 이름을 찾아 새로운 명단을 만드는 코드를 작성하세요.

// 문항.15
// 명단에 '홍'으로 시작하는 학생이 한 명이라도 있는지 확인하는 코드를 작성하세요.

