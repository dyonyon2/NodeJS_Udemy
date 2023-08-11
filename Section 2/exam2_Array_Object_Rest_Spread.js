// Object, 객체 {}
const person = {
    key: 'value',
    name:'Jonyoung',
    age:25,
    greet: () => { //화살표 함수라 this.name => unknown
        console.log('Hi, I am ' + this.name)
    },
    greet1() { 
        console.log('Hi, I am ' + this.name)
    },
    greet2 : function() { 
        console.log('Hi, I am ' + this.name)
    }
};
// console.log(person);
// p`erson.greet();
// person.greet1();
// person.greet2();

//Array, 배열 []. 배열 내 여러 데이터 타입 가능 & 객체, 배열도 가능
const hobbies = ['Sports','cooking',1,true,[1,2,3],{key:"test"}];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

//map은 배열 내 몯느 원소에 하나씩 적용되며, 적용된 원소가 새로운 배열로 반환한다.
console.log(hobbies.map(hobby => 'Hobby : '+hobby));
console.log(hobbies);

//원본은 놔두고 새로운 배열 받는 방법1
const copiedArray = hobbies.slice();
hobbies.push("Programming");
console.log(hobbies);
console.log(copiedArray);

//원본은 놔두고 새로운 배열 받는 방법2 (spread)
const copiedArray1 = [hobbies];  // => [[hobbies 배열]]
console.log(copiedArray1);
// 스프레드 연산자(...) 뒤에오는 배열이나 객체를 받아서 원소나 속성을 가져온다.
const copiedArray2 = [...hobbies];  // 스프레드 연산자 => [hobbies 배열]
console.log(copiedArray2);
const copiedArray3 = {...hobbies};  // 스프레드 연산자 => {hobbies 배열}
console.log(copiedArray3);
const copiedArray4 = {...person};  // 스프레드 연산자 => {hobbies 배열}
console.log(copiedArray4);


//Rest 연산자 : 여러 인수를 하나의 배열로 묶을 때 사용된다.
const toArray = (arg1,arg2,arg3) => { //인자 추가시 유연하지 않음
    return [arg1,arg2,arg3];
};
console.log(toArray(1,2,3));
const toArray2 = (...args) => {
    return args;
};
console.log(toArray2(1,2,3,4,5));