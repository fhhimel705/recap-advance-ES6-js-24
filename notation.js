const student = {
    name : 'rahim uddin',
    age : 15,
    class : 10,
    marks : {
        math : 55,
        physics : 65,
        biology : 85,
        ict : 50
    }
}
const marks = student.marks.math;
const phyMarks = student['marks']['physics'];
// console.log(phyMarks);

const subj = 'ict';
const ictMarks = student.marks[subj];
console.log(ictMarks);
