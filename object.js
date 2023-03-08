// create object literals
const player = {};
player.name = "titumir anan";
player.village = "danajpur ";
player.bat = function () {
  console.log("swing your bat");
};
player.eating = ()=>{
    console.log("he like eating");
}
player.boling = function boll(){
    console.log('he is fast boller');
}

// console.log(player);
/// object constructor
const person = new Object(player);
person.gpa = '5.00';
person.cgpa = '5.00';
// console.log(person);

// object create methon 
const item = Object.create(null);
item.greeting = ' asalamualikum';
// console.log(item);
const atel = Object.create(player);
// console.log(atel.name);


// 4 . class 
class Person{
    // name2: 'johir rayhan';
    constructor(age,name,id){
        // name1 ='titumir';
        this.name =name;
        this.id=57575;
        this.age = age;
    }


}
const person1 = new Person(56,'johir rayhan');
// console.log(person1);

// 5. function object 
 function car(model,price){
    this.model = model;
    this.price = price;
 }
// console.log(car("S"));
const keys = Object.keys(person);
const value = Object.values(person);
const entries = Object.entries(person);
// console.log(keys);
// console.log(value);
// console.log(entries);
// Object.freeze(player);
player.moba=01750561063;
// console.log(player);
// seal use korle konp property delet koryte parbo na
Object.seal(player);
// object theke kono propperty delet koorarr jonno
// delete player.gpa;
// console.log(player);
// const data = player[gpa];
// console.log(keys);

for(const key of keys){
    // console.log(key,':',player[key]);
}
// object loop   method
for(const key in player){
    console.log(key,player[key]);
}
// object loop  advance method
//[key,value] == [ 'name', 'titumir anan' ]
for(const [key,value] of Object.entries(player)){
// console.log(key,value);
}
