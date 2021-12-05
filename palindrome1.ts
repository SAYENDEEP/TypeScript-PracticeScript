function palindromenumber(unionData:(number|string))
{
    var str:string
    if(typeof(unionData)=='number'){
        str=unionData.toString();
    }
    else{
        str=unionData;
    }
    var length= str.length;

    for (var i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - i- 1]) {
            return "Not a Palindrome "
        }
    }
    return "palindrome";
}

console.log(palindromenumber('FAAF'));
console.log(palindromenumber(123));
console.log(palindromenumber('TOY'));
console.log(palindromenumber(123321));