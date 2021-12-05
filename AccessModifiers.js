var Sayendeep2 = /** @class */ (function () {
    //Rule for optional parameter is that in the right side all paramter should be optional if we declare a paramter optional
    function Sayendeep2(firstnames, lastname, age) {
        this.firstname1 = firstnames;
        this.lastname1 = lastname;
        this.age1 = age;
    }
    Sayendeep2.prototype.getFirstname = function () {
        console.log("My First Name is:-" + this.firstname1);
    };
    Sayendeep2.prototype.getLastname = function () {
        console.log("My Last Name is:-" + this.lastname1);
    };
    return Sayendeep2;
}());
var obj3 = new Sayendeep2("Sayendeep", "Mahanty", 23);
obj3.getFirstname();
obj3.getLastname();
