var Sayendeep1 = /** @class */ (function () {
    function Sayendeep1(firstnames, lastname, age) {
        this.firstname = firstnames;
        this.lastname = lastname;
        this.age = age;
    }
    Sayendeep1.prototype.getFirstname = function () {
        console.log("My First Name is:-" + this.firstname);
    };
    Sayendeep1.prototype.getLastname = function () {
        console.log("My Last Name is:-" + this.lastname);
    };
    return Sayendeep1;
}());
var obj2 = new Sayendeep1("Sayendeep", "Mahanty", 23);
obj2.getFirstname();
obj2.getLastname();
