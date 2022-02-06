//bind method, arrow function에서 사용 주의

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42

//전역 문맥에서는 this는 전역 객체를 참조

// 웹 브라우저에서는 window 객체가 전역 객체

//함수문맥
