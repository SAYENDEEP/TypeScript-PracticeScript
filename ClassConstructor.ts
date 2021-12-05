
class Sayendeep1{
    firstname:string;
    lastname:string;
    age:number;
    //Rule for optional parameter is that in the right side all paramter should be optional if we declare a paramter optional
   constructor(firstnames:string,lastname:string,age?:number){  //If we put question mark then we can make the variable optional
        this.firstname=firstnames;
        this.lastname=lastname;
        this.age=age;
   }
    getFirstname(){
       console.log("My First Name is:-"+this.firstname);
    }
    getLastname(){
        console.log("My Last Name is:-"+this.lastname);
    }
 }
 
 let obj2 = new Sayendeep1("Sayendeep","Mahanty",23);
 obj2.getFirstname();
 obj2.getLastname();
 