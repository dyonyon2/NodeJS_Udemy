//비동기 코드
setTimeout(() => {
  //CallBack 함수
  console.log("Timer is done!");
}, 2000);

//동기 코드
console.log("Hello!");
console.log("Hi!");

//비동기 코드. 콜백 중첩 예제
const fetchData = (callback1) => {
  setTimeout(() => {
    callback1("Done1!");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer1 is done!");
  fetchData((text) => {
    console.log(text);
  });
}, 3000);

//Promise 사용 예제
const fetchData1 = (callback1) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done2!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer2 is done!");
  fetchData1()
    .then((text) => {
      console.log(text);
      return fetchData1();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 5000);
