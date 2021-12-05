class Generics <T> {
    private arr:T[]=[];
    public push(data:T){
        this.arr.push(data);
    }
    public toArray():T[]{
        return this.arr;
    }
}

// var myList= new Generics<number>();
// myList.push(10);
// myList.push(20);
// myList.push(30);
// myList.push(40);
// myList.push(50);
// console.log("The Number Array contains"+myList.toArray());
var myList= new Generics<string>();
myList.push("Sayendeep");
myList.push("Ram");
myList.push("Syam");
myList.push("Mohit");
myList.push("Viru");
console.log("The Number Array contains"+myList.toArray());
