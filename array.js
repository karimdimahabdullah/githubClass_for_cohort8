const arr = [1, 'Esther', true, [1,2,3]]

let students = ['Sara', 'Saab', 'Godwin','Moho']

console.log(students[0])
console.log(students.length)

//changing items in an array.
students[3] = 'John'

//adding elements to an array
students.push("Ada") //adds items to the end of the array
console.log(students)

students.unshift("Uma") //adds items to the beginning of the array
console.log(students)

//removing elements from an array
students.pop() //removes the last item in the array
console.log(students)
students.shift() //removes the first item in the array
console.log(students)


//includes, indexOf
console.log(students.includes("Ada")) // checks if at item exits in an array
console.log(students.indexOf("Sara")) /**returns the index of the item in the list.
if the item doesn't exist it returns a -1
*/ 

// reverse,sort, slice, splice
students.reverse()
console.log("this is reversed",students)
students.sort()
console.log("this is sorted",students)

console.log("this is sliced",students.slice(1,3)) //returns a new array with the sliced items
console.log("this is spliced",students.splice(1,2,"Mohammed", "Sarah")) //removes items from the array and returns the removed items
console.log("this is the final array",students)  

//higher order array methods
//map, filter, reduce, forEach, find, findIndex, some, every

//map method
const numbers = [1, 2, 3,4 ,5, 6, 7, 8, 9, 10]
const doubledNumbers = numbers.map((num) => num * 2)
console.log(doubledNumbers)
const marketList = ['rice', 'beans', 'yam', 'fish', 'Plantain']
const addPrefix = marketList.map((item) => "I will buy" + item)
console.log(addPrefix)
// const double = numbers.map((num) => {
//  return num * 2
// })

//filter methods
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers)

const complexion = ['fair', 'dark', 'light', 'brown', 'black']
const darkComplexion = complexion.filter((color) => color === 'dark')
console.log(darkComplexion) 

const findFirstDark = complexion.find((color) => color === 'dark')// return first element of the array.
console.log(findFirstDark) 

const findIndexOfDark = complexion.findIndex((item) => item === "dark")
console.log(findIndexOfDark)

//reduce method
const num = [700, 300, 500, 1000, 2000]

const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0)    
console.log(sum) //loops through the array and adds all the values together and returns a single value

const multiply = num.reduce((accumulator, currentValue) => accumulator * currentValue, 1)   
console.log(multiply) 


