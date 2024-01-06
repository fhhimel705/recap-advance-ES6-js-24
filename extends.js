class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  giveFeedBack(about){
    console.log(`${this.name} thank you for your feedBack about ${about}` );
  }
}
class Instructor extends TeamMember {
  designation = "web instructor";
  team = "web team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  startLiveClass(time) {
    console.log(`${this.name} start the live class at ${time}`);
  }
  createQuiz(lesson) {
    console.log(`${this.name} please start quiz for lesson ${lesson}`);
  }
}
class jobPlace extends TeamMember {
  designation = "web instructor";
  team = "web team";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }

  startLiveClass(time) {
    console.log(`${this.name} start the live class at ${time}`);
  }
  createQuiz(lesson) {
    console.log(`${this.name} please start quiz for lesson ${lesson}`);
  }
}

const lisa = new Instructor('lisa', 'us', 'newTech');
console.log(lisa);

lisa.startLiveClass('9am');
lisa.giveFeedBack('lesson');

const mila = new jobPlace('mila', 'india', 'dilli');
console.log(mila);
mila.giveFeedBack('job');
mila.startLiveClass('11pm');