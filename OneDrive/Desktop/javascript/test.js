//4. Error handling
const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hen"), 3000);
  });
};

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(hen), 6000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>fri`), 1000);
  });

function sleep(delay) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
sleep(3000);
console.log("start");

getHen().then(console.log);
getEgg("hen").then(console.log);
cook("egg").then(console.log);
