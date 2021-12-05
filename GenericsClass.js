var Generics = /** @class */ (function () {
    function Generics() {
        this.arr = [];
    }
    Generics.prototype.push = function (data) {
        this.arr.push(data);
    };
    Generics.prototype.toArray = function () {
        return this.arr;
    };
    return Generics;
}());
// var myList= new Generics<number>();
// myList.push(10);
// myList.push(20);
// myList.push(30);
// myList.push(40);
// myList.push(50);
// console.log("The Number Array contains"+myList.toArray());
var myList = new Generics();
myList.push("Sayendeep");
myList.push("Ram");
myList.push("Syam");
myList.push("Mohit");
myList.push("Viru");
console.log("The Number Array contains" + myList.toArray());
