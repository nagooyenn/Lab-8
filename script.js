// Create student object with properties and methods
const student = {
    name: 'Annie Nguyen',
    age: 21,
    enrolled: true,
    courses: ['JavaScript', 'HTML', 'CSS'],
    displayInfo() {
      return `${this.name} is ${this.age} years old and is ${this.enrolled ? 'enrolled' : 'not enrolled'}.`;
    },
    addCourse(newCourse) {
      this.courses.push(newCourse);
      console.log(`Added course: ${newCourse}`);
    },
    totalCourses() {
      return this.courses.length;
    }
  };
  
  // Log basic student info
  console.log(student.name);
  console.log(student.age);
  console.log(student.displayInfo());
  

console.log(student.name);
console.log(student.age);
console.log(student.displayInfo());

// Convert object to JSON and back
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

const clonedStudent = { ...student, graduationYear: 2025 };
console.log("Cloned Student with graduationYear:", clonedStudent);

const newCourses = ["Philosophy", "Art"];
const allCourses = [...student.courses, ...newCourses];
console.log("All Combined Courses:", allCourses);

student.addCourse("History");
console.log("Total courses:", student.totalCourses());

const total = scores.reduce((sum, val) => sum + val, 0);
const average = total / scores.length;
console.log("Average Score:", average);
