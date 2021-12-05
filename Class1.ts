
//use of Class and object in typescript
class Employee{
    id:number;
    name:string;
    dept:string;
    designation:string;

    display(){
        var strToDisplay = `Id:${this.id} \n name: ${this.name} \n Dept:${this.dept} \n Designation : ${this.designation}`
        console.log(strToDisplay);
    }
}
var empObj =  new Employee();
empObj.id= 100;
empObj.name='Sayendeep';
empObj.dept='CSE';
empObj.designation='System Engineer';
empObj.display();