class Instructor {
  instructorName;
  designation = "web instructor";
  team = "web team";
  instructorLocation;
  constructor(name, location) {
    this.instructorName = name;
    this.instructorLocation = location; 
  }
  startLiveClass(time) {
    console.log(`${this.instructorName} start the live class at ${time}`);
  }
  createQuiz(lesson) {
    console.log(`${this.instructorName} please start quiz for lesson ${lesson}`);
  }
}

const lila = new Instructor('lila' , 'qatar');
// console.log(lila);
lila.startLiveClass('10pm');
lila.createQuiz(15);

const jimmy = new Instructor('jimmy' , 'uk');
console.log(jimmy);
jimmy.createQuiz(20);
jimmy.startLiveClass('10am');
