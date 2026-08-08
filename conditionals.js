//if/else

let age = 40;

if(age >= 18){
    console.log('You can vote');
}else{
    console.log('You can not vote ');   
}

let gender = 'non-binary';
if(gender === 'female'){
    console.log('You are a female, use the lady restroom');
}else if(gender === 'non-binary'){
    console.log('You are a non-binary, use the unisex restroom');
}else if(gender === 'trans'){
    console.log('You are other trans, use the unisex restroom');
}else {
        console.log("You are a male, use the men's restroom");
    }

//loops
for(let i = 0; i < 10; i++){
    console.log(i);
}

let arrOfNames = ['james', 'jane', 'joe', 'jill', 'jess'];
console.log(arrOfNames.length);
for(let names = 0; names < arrOfNames.length; names++){
    console.log('TECH_CRUSH' + arrOfNames[names]);
}

for(let x = 1; x<=36; x++){
    console.log(x * 2);
}

//While loop
let loginAttempt = 0;
while(loginAttempt <= 3){
    console.log(`attempt number ${loginAttempt}`);
    loginAttempt++;
}
let scores = [20, 12, 25, 15]

//loop that adds 20marks to each score in the scores array
for(let scoreCount = 0; scoreCount < scores.length; scoreCount++){
 console.log(scores[scoreCount] + 20);

}




 

 