// Syntax
// class class_name { 
//    //class scope 
// }
// The class keyword is followed by the class name. The rules for identifiers must be considered while naming a class.
// A class definition can include the following −
// Fields − A field is any variable declared in a class. Fields represent data pertaining to objects
// Constructors − Responsible for allocating memory for the objects of the class
// Functions − Functions represent actions an object can take. They are also at times referred to as methods
// These components put together are termed as the data members of the class.
// Consider a class Person in typescript.
// class Person {
// }
// On compiling, it will generate following JavaScript code.
// Generated by typescript 1.8.10
// var Person = (function () {
//    function Person() {
//    }
//    return Person;
// }());
var Sayendeep = /** @class */ (function () {
    function Sayendeep() {
    }
    Sayendeep.prototype.getFirstname = function () {
        console.log("My First Name" + this.firstname); //this is basically used to access the member 
    };
    Sayendeep.prototype.getLastname = function () {
    };
    return Sayendeep;
}());
var obj1 = new Sayendeep();
obj1.firstname = "Sayen";
obj1.getFirstname();
obj1.lastname = "Mahanty";