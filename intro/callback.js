// setTimeout(() => {
//   console.log("merhaba");
// }, 3000);

// setInterval(() => {
//   console.log("first");
// }, 1000);

// const sayHi = (cb) => {
//   cb();
// };
// sayHi(() => {
//   console.log("Hiii");
// });
import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    console.log(users);
  });
