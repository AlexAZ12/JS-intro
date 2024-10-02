// Exercice 1
const student = {
    name: 'Marie',
    age: 20,
    courses: []
}

//Exercice 2
student.age = 21
console.log(student.age);

student.grade = "A"
console.log(student.grade);

//Exercice 3
student.courses.push("Math","Physics","Chemistry")
console.log(student.courses);

student.courses.indexOf('Physics')
console.log(student.courses.indexOf('Physics'))

student.courses.slice(0, 2)
console.log(student.courses.slice(0, 2))

//Exercice 4
console.log(student)
console.log(student.courses.indexOf('Physics'))
console.log(student.courses.slice(0, 2))