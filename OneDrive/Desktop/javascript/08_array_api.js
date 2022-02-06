// 01.make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const string = fruits.join(); //default 구분자 : ,
  console.log(string);
}

//02. make an array out of a string
{
  const temp = "apple,banana,orange";
  const result = temp.split(",");
  console.log(result);
}

//03.make this array look like this [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); //array 자체도 변화시킴, return값도 reverse된걸 리턴
}

//04.make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, array.length); //start이상, end미만
  console.log("slice", array); //배열에서 리턴해서 받고 싶을 때(원본 변경 X)
  console.log("slice res", result);
  const result2 = array.splice(0, 2);
  console.log("splice", array); //기존 배열에서 삭제, 배열 자체 수정(원본 변경)
  console.log("splice res", result2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const student = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

//05.find a student with the score 90
{
  const result = student.findIndex((student, index) => {
    if (student.score === 90) return index;
  });
  console.log(result);

  const result2 = student.find((student) => {
    return student.score === 90;
    //전달된 predicate함수가 true가 되면, return the value of the 1st elem.
  });
  console.log(result2);
}

//06.make an array of enrolled students
{
  const result = student.filter((student) => {
    return student.enrolled === true;
  });
  console.log(result);
}

//07. make an array containing only the students' score
//result : [45,80,90,66,88]
{
  array = [];
  student.forEach((student) => array.push(student.score));
  console.log(array);

  array2 = [];
  for (let temp of student) {
    array2.push(temp.score);
  }
  console.log(array2);

  //모든 array의 elem을 돌면서 callback func 수행
  //각 callback func에서 return한 값(any)들을 모아서, return (any[])
  //callback func 에 따라서, 각 아이템이 다른 값으로 mapping됨
  const result3 = student.map((student) => student.score);
  console.log(result3);

  const result4 = student.map((student) => 5 * 2);
  console.log(result4);
}

//08.check if there is a student with the score lower than 50
{
  //하나라도 이 조건에 만족하는지
  const result = student.some((student) => student.score < 50);
  console.log(result);
  // 모두 이 조건에 만족하는지
  const result2 = student.every((student) => student.score >= 50);
  console.log(result2);
}

//09. compute students' average score
{
  //배열을 돌면서 누적하는 값을 구할 때 사용
  //리턴값이 그 다음 반복에서 prev에 전달
  const result = student.reduce((prev, current) => {
    return prev + current.score;
  }, 0); //2nd param = initial value
  console.log(result / student.length);
}

//10.make a string containing all the scores(50점 이상)
{
  const result = student
    .map((student) => student.score) //score list return
    .filter((score) => score >= 50) //score에서 predicate true인 것 list return
    .join(", "); //list join으로 묶음
  console.log(result);
}

//sort
{
  const result = student
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(", ");
  console.log(result);
}
