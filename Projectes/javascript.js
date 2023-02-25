
// console.log(add(5, 6));
// const sum = (first,second) => first+second;
// console.log(sum(5,1));

// 
// 1. var let const 
/* const numbers = [3,34,543,34];
// reasing kora jabe na 
let n = 2;
n=5;
// reasing kora jaba 
// amara var use korbo na karon ata block scope er vitore declared korle o global hoiye jay
// 2. defalut parameter in function 
const sum = (a,b=1) => a+b;
// multilin arrow function er jonno return likhte hobe
console.log(sum(5));
function add(first = 1, second = 1) {
  return first + second;
}

// 3.Template string 
const element = `i am a titumir anan
 i am come from thakurgoan 
 my village name is danajpur 
 my father name is munsef ali
 my mothe r name is najma begum 
 my brother name is johir rayhan bullet 
 he is a 89 year oold 
 `;
 // back trik diye multiline string likha jay
//  const age = `my age is ${old}`;
 // daynamic vabe variable use
 
// 4. sprad 
const num = [12,14,15,16,18];
const num2= [...num];
num2.push(45);
console.log(num)
console.log(num2)

// 5. arry and object destruncting
const data = {
  name : 'titumir anan',
  id : 125866645,
  subject : 'Mathematics',
  cgpa: 3.42,
}
// console.log(data);
// console.log(data.cgpa);
const {cgpa, id,...x} = data;
// ...x = all data reserve kore
console.log(cgpa);
console.log(id);
console.log(x);
//same array but index 

//6. map() fuction 
 
const num = [12,14,15,16,18];
const num2 = num.map(x=>x*2);
console.log(num2);

// forEach()
const num3 = [12,14, ,16,18];
num3.forEach(x=>console.log(x/2));
num3.forEach(x=>{
  if (x%2==0) {
    console.log(x);
  }
});
*/
/// class 

class Titumir{
name;
designation = "web instructors"
team = ' web team'
location;
constructor(name,location){
this.name = name;
this.location = location;
}
startSupportSeccion(){
  console.log('hi  i am a web hackers');
  
}
createQuize (module){
  console.log(`Please create quize ${module}`);
}
}
const titu = new Titumir('titu','dhaka');
console.log(titu);