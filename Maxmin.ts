function maxvalue(num1:number,num2:number,num3:number):number{
  if(num1>num2 && num1>num3)
     return num1;
  else if(num2>num3)
     return num2;
  else
    return num3;
}
function minvalue(num1:number,num2:number,num3:number):number{
    if(num1<num2 && num1<num3)
       return num1;
    else if(num2<num3)
       return num2;
    else
      return num3;
  }
var max1= maxvalue(10,50,4);
var min1=minvalue(23,34,35)
console.log(max1);
console.log(min1)