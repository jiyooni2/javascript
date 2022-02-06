// https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67

function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;
var kim = new Person();
var park = new Person();
console.log(kim.eyes);
console.log(kim.nose);

/*
Person.prototype이라는 빈 Object가 어딘가에 존재하고, 
Person 함수로부터 생성된 객체(kim, park)들은 
어딘가에 존재하는  Object에 들어있는 값을 모두 갖다쓸 수 있습니다.
*/
