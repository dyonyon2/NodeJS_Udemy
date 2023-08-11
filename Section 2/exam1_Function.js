const name = "JongYoung";
let age = 25;
const hasHobbies = true;

age = 30;

//일반 함수
function sumarizeUser(name, age, hasHobbies) {
  return (
    "My name is " +
    name +
    ", age is " +
    age +
    ", and the user has hobbies " +
    hasHobbies
  );
}

//익명함수
const sumarizeUser1 = function (name, age, hasHobbies) {
  return (
    "My name is " +
    name +
    ", age is " +
    age +
    ", and the user has hobbies " +
    hasHobbies
  );
};

//화살표 함수
const sumarizeUser2 = (name, age, hasHobbies) => {
  return (
    "My name is " +
    name +
    ", age is " +
    age +
    ", and the user has hobbies " +
    hasHobbies
  );
};

//화살표 함수
const add = (a, b) => {
  return a + b;
};

//화살표 함수 축약
const add1 = (a, b) => a + b; //함수 내에 return 만 있을때 중괄호 생략 가능
const add2 = a => a + 1; //인자가 하나일때 괄호 생략 가능
const add3 = () => 3; //인자가 없을때에는 빈 괄호를 해주어야함

console.log(sumarizeUser(name, age, hasHobbies));
console.log(add1(1, 2));
console.log(add2(1));
