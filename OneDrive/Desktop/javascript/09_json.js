//Client - Server 통신 규약 : (HTTP,HyperText Transfer Protocol)
//Client -> Server : request
//Server -> Client : response
//HyperText : Hyperlink, resources, document, images

//AJAX : Asynchronous JavaScript ans XML
//동적으로 서버에게 데이터를 주고받을 수 있는 기술(XML뿐 아니라 plain text, JSON도 가능)
//AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scene
//possible to update parts of a web page without reloading the whole page
//서버와 통신하기 위해 XHR 객체를 사용하는 것을 말함
//이러한 비동기성을 통해 사용자의 Event가 있으면 전체 페이지가 아닌 일부분만 업데이트
//페이지 새로고침 없이 서버에 요청, 서버로부터 데이터를 받고 작업을 수행

//XHR : XMLHttpRequest, Object 브라우저 API에서 제공하는 object중 하나
//XHR : 브라우저에 내장돼 있음(to request data form a web server), AJAX 사용하는데 쓰임
//fetch() API를 통해서도 간단하게 주고받을 수 있음(AJAX에 사용)

//XML은 Markup언어중 하나 HTML과 마찬가지로 데이터를 표현할 수 있는 하나의 방법
//서버와 데이터 주고받을 때 여러가지 사용 가능 XML 등등

//브라우저 - 서버 : XMLHttpRequest(object), fetch() API
//XML : 불필요한 tag너무 많고 가독성 안좋음, 사용성 떨어짐

//JSON : JavaScript Object Notation
//JSON > key와 value로 이루어짐, 브라우저/모바일/오브젝트를 파일에 저장할때에도 자주 사용

//simplest data interchange format
//텍스트기반, 읽기 쉬움
//used for serialization, transmission of data
//independent programming language, 어느 언어에서도 사용 가능

//클라이언트 <-> 서버 에서 json형태로 바꾸어서 전송
//object -> JSON(string) : serialize
//string -> object : deserialize

//1. Object to JSON(stringify)
//통제하면서 바꾸고 싶다면, callback func 넣기
let json = JSON.stringify(true);
//Overloading : 함수의 이름은 같지만, 몇개의 파라미터를 전달하느냐에 따라 각각 다른 방식으로 호출 가능
//Overriding : 상속할 때 함수 바꾸는 것
console.log(json);

//param -> json, obj->json, param=obj
json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  symbol: Symbol("id"), //js에만 있는 이런 문법은 포함되지 않음
  jump: function () {
    console.log(`${this.color} can jump!`);
    //this : 자신을 둘러싼 환경의 this를 계승받는다.
    //arrow function을 작성한다면 상위환경의 this를 그대로 계승하는 Lexical this를 따름
    //this가 지칭하는 동적 스코프 규칙을 폐기하고 자신과 가장 가까운 함수의 스코프에서 this를 받아옴
  },
};
rabbit.jump();

json = JSON.stringify(rabbit, null, null);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); //원하는 property만 list로 넘길수 있음
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  return key === "name" ? "jiyoon" : value;
});
console.log(json);

//2. JSON to Object

let obj = JSON.parse(json);
console.log(obj);
console.log(rabbit);
rabbit.jump();
//rabbit -> JSON : 함수 포함 안됨, data만 포함, 다시 obj로 변환하면
//jump메소드는 포함 안됨 > obj.jump() impossible

console.log(rabbit.birthDate.getDate());
//rabbit.birthDate : obj
//console.log(obj.birthDate.getDate());
//obj에서의 birthDate는 string, 불가능 birthDate는 string일 뿐이기 때문

obj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj.birthDate.getDate());
