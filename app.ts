// console.log('hasan');




//-----Type Annotations-----//


// let userName:string = 'hasan';
// console.log(userName);

// let num:number = 20;
// console.log(num);

// let isLoggedIn:boolean = true;
// console.log(isLoggedIn);

// function greetUser(num1:number,num2:number){
//     return num1 + num2
// }
// console.log(greetUser(20,12));


// function greetUsers(str1:string,age:number){
//     console.log(`hello my name is ${str1} and my age is ${age}`);
// }

// greetUsers('hasan' ,21)





//-----Type Inference-----//


// let userName = 'hasan';
// console.log(userName);


// let age = 20;
// console.log(age);

// let isLoggedIn = false;
// console.log(isLoggedIn);





//-----Type Aliases-----//



// type user = number;
// let uderId:user = 32;
// console.log(uderId);


// type user = string;
// let userId:user = 'hasan'
// console.log(userId);

// type user = {
//     userName : string;
//     age : number;
//     isLogged : boolean;
//     lastName? : string
// }
// let obj : user = {
//     userName : 'hasan',
//     age : 21,
//     isLogged : true
// }

// obj.lastName = 'khan'

// type fruit = (string | number)[]

// let fruits:fruit = ['apple',2, 'banana', 3]
// console.log(fruits);


// let arr:string[] = ['hasan']
// console.log(arr);

// let stringAndNumber:(string | number)[] = ['hasan' ,20]
// stringAndNumber = ['ahsan',43]
// console.log(stringAndNumber);



//-----Union Type-----//


// type user = (number | string | boolean)[];

// const hasan:user = ['hasan', 20, false];

// console.log(hasan);


// hasan[0] = 'ahsan';
// hasan[1] = 25;
// hasan[2] = true;

// console.log(hasan);



//-----Interfaces-----//


// interface Obj {
//     userName : string;
//     age : number;
//     isLogged : boolean;
//     lastName?: string;
// }

// let obj:Obj = {
//     userName : 'hasan',
//     age : 21,
//     isLogged : true
// }

// console.log(obj);

// obj.lastName = 'khan';

// console.log(obj);




//-----Interfaces vs Type Aliases-----//



// interface User {
//     userName : string;
//     age : number;
// }

// interface User {
//     isLogged : boolean;
// }

// const user : User = {
//     userName : 'AHSAN',
//     age : 20,
//     isLogged : true
// }
// console.log(user);


// interface Furits {
//     mango : string;
//     price : undefined;
//     orange : string;
// }

// interface User extends Furits {
//     firstName : string;
//     lastName : string;
// }

// let userId:User ={
//     firstName : 'ahsan',
//     lastName : 'khan',
//     mango : 'green',
//     price : undefined,
//     orange : 'orange'
// }
// console.log(userId);




// type Fruits = {
//     mango : string;
//     price : number;
//     orange : string;
// }

// type User = Fruits & {
//     firstName : string;
//     lastName : string;
// }

// const uderId:User = {
//     firstName : 'ahsan',
//     lastName : 'khan',
//     mango : 'green',
//     price : 4555,
//     orange : 'orange'
// }

// console.log(uderId);
