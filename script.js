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
