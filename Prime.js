var number1 = 11;
var isPrime = true;
if (number1 == 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number1 > 1) {
    for (var i = 2; i < number1; i++) {
        if (number1 % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log('The number is a prime number');
    }
    else {
        console.log('The number is a not prime number');
    }
}
else {
    console.log("The number is not a prime number");
}
