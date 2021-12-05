var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        var strToDisplay = "Id:" + this.id + " \n name: " + this.name + " \n Dept:" + this.dept + " \n Designation : " + this.designation;
        console.log(strToDisplay);
    };
    return Employee;
}());
var empObj = new Employee();
empObj.id = 100;
empObj.name = 'Sayendeep';
empObj.dept = 'CSE';
empObj.designation = 'System Engineer';
empObj.display();
