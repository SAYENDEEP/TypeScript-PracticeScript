interface Namepro{  // First Name of interface must be capital
    firstname:string,
    lastname:string,
    age:number,
    address:string
}

let namets =(encapsulate1)=>{  //Using Encapsulation to reduce the number of parameter
    console.log("FirstName:"+encapsulate1.firstname+" "+"LastName:"+encapsulate1.lastname+" "+"Age:"+encapsulate1.age);
}
namets({
    firstname:"Sayendeep",
    lastname:"Mahanty",
    age:23
});