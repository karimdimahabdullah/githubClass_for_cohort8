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
    position: 'Software Engineer',
    salary: 50000,
    city: 'Ghana',
}