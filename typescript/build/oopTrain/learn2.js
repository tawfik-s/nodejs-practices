"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(grade, id) {
        this.studentGrade = grade;
        this.studentId = id;
    }
    Student.prototype.id = function () {
        return this.studentId;
    };
    return Student;
}());
var Graduate = /** @class */ (function (_super) {
    __extends(Graduate, _super);
    function Graduate(grade, id, major) {
        var _this = _super.call(this, grade, id) || this;
        _this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
        _this.studentGrade = grade; // Accessable because parent is protected
        _this.studentMajor = major;
        return _this;
    }
    return Graduate;
}(Student));
var myStudent = new Graduate(3, 1234, 'computer science');
console.log(myStudent.id()); //  prints 1234
myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
console.log(myStudent.id()); // prints 1235
