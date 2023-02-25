const numbers = [12,23,43,53,4];
const max = Math.max(...numbers);
console.log(max);
// oi array ke same rakhe new arry newa
// const numbers1 = numbers; // right prosess na
// copy array
const numberss = [...numbers];
numberss.push(45);
numberss.push(45);
numberss.push(45);
numberss.push(45);
console.log(numbers);
console.log(numberss);