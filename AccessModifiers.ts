class Sayendeep2{
   constructor(private firstnames:string,private lastname:string){   
     }
    getFirstname(){
       console.log("My First Name is:-");
    }
    getLastname(){
        console.log("My Last Name is:-");
    }
 }
 
 let obj3 = new Sayendeep2("Sayendeep","Mahanty");
 
 obj3.getFirstname();
 obj3.getLastname();
 