// function collect(a, b) { tradional method
//   return a + b;
// }

// ES6 arrow function
// const topla = (a, b) => {
//   return a + b;
// };

// export default collect;

// 2.Method to import

// export const collect = (a, b) => a + b;
// export const hello = () => {
//   console.log("Hello");
// };

// export in one go

const collect = (a, b) => a + b;
const hello = (name) => {
  //   console.log("Hello" + name);
  console.log(`hello ${name}`);
};

export { collect, hello };

export const text = "this is a text";
