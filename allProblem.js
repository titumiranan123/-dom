/*const multiply = (x, y, z) => x * y * z;
const result = multiply(2, 3, 5);
console.log(result);

// question 2
const pragraph = `I am a Developer .
I love to code .
I love to eat biryani.`;
console.log(pragraph);
const pragraph1 = 'I am a Developer .I love to code. +I love to eat biryani.';
console.log(pragraph1);
const tituresult = (a,b=2)=> a*b;
console.log(tituresult(12));
*/
/*
const friends = ['titumir', 'tapos', 'sobuj', 'sojiba', 'tajmin'];
console.log(friends.length);
const arryInputfunction = (arr) => {
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 == 0) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
const even = arryInputfunction(friends);
console.log(even);

*/
const avarageFunction = (arr)=>{
    let sum = 0;
    for(let i = 0; i< arr.length;i++){
        sum += Math.pow(arr[i],2);
    }
    return(sum/(arr.length));
}
const num = [1,2,3,4];
const result=avarageFunction(num);
console.log(result);



const combind = (arr,arr1)=>{
    const combind = [...arr,...arr1];
    // console.log(combind);
    const max = Math.max(...combind);
    return(max);
}
const num1 = [1,2,3,4];
const num2 = [12,22,32,42];
console.log(combind(num1,num2));