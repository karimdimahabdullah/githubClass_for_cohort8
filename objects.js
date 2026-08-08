const obj = {
    name: 'KARIM DIMAH ABDULLAH',
    gender:'male',
    age: 40,
    complexion: 'dark',
}


//adding a new property to an object

let phone = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    price: 35000,
}

phone.color = 'black'
console.log(phone)

let student = {
    name: 'Godwin',
    regNo: 'C8/001',
    course: 'Javascript',
    year: 2024,
    friends: ['Sara', 'Saab', 'Moho'],
}

student.gender = 'Male'
console.log(student)

student.course = 'Node.js';
console.log(student) 
delete student.year
console.log(student)

//object destructuring

let employee = {
    name: 'John Doe',
    role: 'Software Engineer',
    salary: 50000,
    city: 'Ghana',
}

let hisName = employee.name
let hisRole = employee.role
let hisSalary = employee.salary
let hisCity = employee.city


const {name: name, role: role, salary, city} = employee


let DNA = {
    gender: 'XY',
    complexion: 'dark',
}

let offSpring = {
    ...DNA,
    name: 'KARIM DIMAH ABDULLAH',
    age: 40,
}

console.log(offSpring)

//iteration through an object 
// for...in loop
for (let key in offSpring) {
    console.log(key, offSpring[key])
}   


console.log(Object.keys(offSpring))
console.log(Object.values(offSpring))
console.log(Object.entries(offSpring))
