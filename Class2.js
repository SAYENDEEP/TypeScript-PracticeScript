var Student = /** @class */ (function () {
    function Student() {
        this.id = 0;
    }
    Student.prototype.display = function () {
        var strToDisplay = "Id:" + this.id + " \n Name:" + this.name1;
        console.log(strToDisplay);
    };
    Student.prototype.setName = function (name) {
        this.name1 = name;
    };
    return Student;
}());
var studentObj = new Student;
studentObj.id = 220;
// studentObj.name1='Sayendeep Mahanty';
studentObj.display();
studentObj.setName('Ram Mohan');
studentObj.display();
