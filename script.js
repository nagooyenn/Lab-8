const student = {
  name: 'Annie Nguyen',
  age: 21,
  enrolled: true,
  courses: ['JavaScript', 'HTML', 'CSS'],
  displayInfo() {
    return `${this.name} is ${this.age} years old and is ${this.enrolled ? 'enrolled' : 'not enrolled'}.`;
  }
};

console.log(student.name);
console.log(student.age);
console.log(student.displayInfo());

const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Student Object:", parsedStudent);

const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log("First two scores:", score1, score2);
