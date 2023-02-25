// const {x,y,...k} ={
//     x : 'titu',
//     y:3,
//     z:'Nijer school',
//     d:3,
//     jk:'Nijer school'
// } ;
// console.log(k);

// const data = {
//     cunt: 09389,
//     data : [
//         {id:1,name:'babul',job:'Leader'},
//         {id:1,name:'babul',job:'Leader'}
//     ]
// }
// const data = {
//     cunt: 09389,
//     data : {
//        person :{
//         id:1,
//         name:'babul',
//         job:'Leader',
//         id:1, name:'babul', job:'Leader'}
//        }
//     }

// console.log(data.data.persona?.job);
// console.log("fdjkhfajkdhfkj");
const num = [12, 23, 4, 5, 6, 7, 1];
// const num1 = num.map(num=>num*2);
// console.log(num);
// console.log(num1);
// First method
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]/ 2);
// }
// 2nd Method
// for (const n of num) {
//   console.log(n * 2);
// }
// map kore then
// const nums = num.map(num=>num*2);
// console.log(nums);
const num1 = num.map(function(num){
    if(num%2 == 0){
        return num*2;
    }else{

    }
})


// const num2 = num.map(num=>{
//     if(num%2 == 0){
//         return num*2;
//     }else{
//         return 0;
//     }
// })
// console.log(num2);
const even = num.filter(nums => (nums%2 != 0));
console.log(even);
const obj = { foo: 1 };
obj.bar = 2;
console.log(obj);
function min(nums){ 
    return Math.min(nums) 
  }
  console.log(min( [1,3,2 ]))
  const {x, y, z} = {x: 1, y1: 2, z: 3};
  console.log(y);  