console.log("my" + "cat");
console.log("1" + 2);
console.log(`string : 1+2 =
''''
"""
 ${1 + 2}`);

console.log(2 ** 3);
let counter = 2;
const preIncrement = ++counter;
counter = 2;
const postIncrement = counter++;

console.log(preIncrement, postIncrement);

if (3 < 2) console.log("A1");
else if (5 < 2) console.log("A2");
else console.log("A3");

console.log(5 > 2 ? "yes" : "no");

const browser = "IEa";

switch (browser) {
  case "IE":
    console.log("Go away");
    break;
  default:
    console.log("MEME");
    break;
}

for (let i = 3; i > 0; i--) console.log(i);

for (let i = 3; i > 0; i = i - 2) console.log(i);

//사실 비효율적 코드
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i > 8) break;

  console.log(i);
}
