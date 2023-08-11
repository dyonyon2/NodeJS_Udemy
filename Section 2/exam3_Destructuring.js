const person = {
  key: "value",
  name: "Jonyoung",
  age: 25,
  greet: () => {
    //화살표 함수라 this.name => unknown
    console.log("Hi, I am " + this.name);
  },
  greet1() {
    console.log("Hi, I am " + this.name);
  },
  greet2: function () {
    console.log("Hi, I am " + this.name);
  },
};

const printName = (personData) => {
  console.log(personData.name);
};

printName(person);

//Destructuring 구조분해 : 객체구조분해, 배열구조분해
// 객체 구조분해 활용 1 
const printName1 = ({name, age}) => {
    console.log(name, age);
  };
  
printName1(person);
// 객체 구조분해 활용 2 
const {name, age} = person;
console.log(name,age);
// 객체 구조분해는 key값을 사용해야하지만, 배열 구조분해에서는 이름 설정 가능

// 배열 구조분해 활용 1
const hobbies = ['Sports','Cooking','Programming'];
const [hobby1, hobby2, hobby3] = hobbies;
for(let hobby of hobbies){
    console.log(hobby);
}
console.log(hobby1,hobby2,hobby3);