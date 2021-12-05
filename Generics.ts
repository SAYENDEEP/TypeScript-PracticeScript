function users<T>(data:T):T{//Here we are using generics function to accept all type of datatype
    return data;
}
console.log(users({name:"anil",age:"30"}))
