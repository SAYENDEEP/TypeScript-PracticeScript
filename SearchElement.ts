var arr2=[2,4,6,8,7,9,3];
var n1:number=6;
var flag:number=0;
var index:number;
for(var i=0;i<arr2.length;i++){
    if(arr2[i]==n1){
        index=i+1;
        
         flag=1;
    }
}
if(flag==1)
  {
      console.log('Your element is found in index'+index);
  }
  else{
    console.log('Given number is not present in the array');
  }

