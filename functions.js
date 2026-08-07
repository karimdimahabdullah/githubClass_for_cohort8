//How to declare a function
// function functionName(){
//     //code to be executed
// }


//functions without parameters
function greetings (){
    console.log('Hello World');
}

greetings();

 


//functions with parameters
function welcome(name){
    console.log(`Welcome to class MR/MISS/MRS ${name}`);
}

welcome('John');

//add (static function)
function add (){
    let x = 4;
    let y = 6;
    return x + y;
}

console.log(add());

//add (dynamic function)
function addition( x, y){
    return x + y;
}

console.log(addition(9, 10))


function ageCheck(age){
    if(age <= 18){
        return 'Please GET OUT ...YOU ARE UNDERAGED'
    }else {
        return "Buy one bottle for me Egbon!!"
    }
}

let estherAge = ageCheck(18);
console.log(estherAge);


//Scope
//Global scope

let score;

function gradingSystem (){
    if (score >= 50){
        return "PASSED!"
    }else{
        return "FAILED!!!!"
    }
}

function deliveryFee(){
    let fee = 5000
    return fee
}

// ARROW FUNCTIONS
const minus = (num) => {
    return num - 50
}
let result = minus(75)