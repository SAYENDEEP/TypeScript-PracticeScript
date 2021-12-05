var n1:number = 0;
var n2:number = 1,nextTerm:number;

console.log('Fibonacci Series:');

for (let i = 1; i <= 10; i++) {
   console.log(n1+' ');
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    }