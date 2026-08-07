// for(let x = 0; x <= 12; x++){
// console.log(x * 3);
// }

// let scores = [20, 12, 25, 15]

// //loop that adds 20marks to each score in the scores array
// for(let scoreCount = 0; scoreCount < scores.length; scoreCount++){
//  console.log(scores[scoreCount] + 20);

// }
 //Write a function 
 // if lucky number is 4, if strictly input is 4
 //then congratulations
 //else try again
// function luckNumberSelection(number){
//     if (number === 4){
//         return 'Congratulation you have won'
//     }else {
//         return 'You lost try again later'
//     }
// }

// let outCome = luckNumberSelection(4)
// console.log(outCome)
/**
 * 
 *Write a function that grades a student score, if the score is;
 1. 70-100 display "A"
 2. 50-69 display "B"
 3. 0-49 display 'C'
 */

 function gradingSystem(marks){
    if(marks >= 70 && marks <= 100){
        return "A"
    }else if(marks >= 50 && marks <= 69){
        return "B"
    }else {
        return "F"
    }
 }

 let gradeChecker = gradingSystem(40)
 console.log(gradeChecker)


// function gradingSystem (){
//     if (score >= 50){
//         return "PASSED!"
//     }else{
//         return "FAILED!!!!"
//     }
// }

