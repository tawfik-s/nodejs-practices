"use strict";
var studentFactory = function (name, age) {
    var greet = function () { return console.log('hello'); };
    return { name: name, age: age, greet: greet };
};
var myStudent = studentFactory('Hana', 16);
