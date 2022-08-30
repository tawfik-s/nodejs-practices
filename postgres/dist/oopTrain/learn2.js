"use strict";
class Student {
    constructor(grade, id) {
        this.studentGrade = grade;
        this.studentId = id;
    }
    id() {
        return this.studentId;
    }
}
class Graduate extends Student {
    constructor(grade, id, major) {
        super(grade, id);
        this.studentId = id;
        this.studentGrade = grade;
        this.studentMajor = major;
    }
}
const myStudent2 = new Graduate(3, 1234, 'computer science');
console.log(myStudent.id());
myStudent2.studentId = 1235;
console.log(myStudent.id());
//# sourceMappingURL=learn2.js.map