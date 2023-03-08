const polapin =[

    {Name: 'Abul', job:'sorkari',salary: '2000'} ,
    {Name: 'kabu', job:'sorkari',salary: '50000'} ,
    {Name: 'dabul  ', job:'besorkari',salary: '60 0000'} ,
    {Name: 'nirob  ', job:'besorkari',salary: '80 0000'} 
];
// const p = polapin.filter(s=> s.job == 'sorkari' && s.salary>5000); 
// console.log(p);
// const s = polapin.forEach(e=> console.log(e))
// const info={};
// polapin.map(a=>{
//     const n= a.Name; 
//     const s = a.salary;
//     info[s]=n;
// })
// console.log(info);

const json = JSON.stringify(polapin);
console.log(json);


