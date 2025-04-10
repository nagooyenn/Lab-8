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
