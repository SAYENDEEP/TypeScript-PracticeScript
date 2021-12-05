var ArrMeanStack= new Array("Mongo","Express","Angular","Node");
console.log("With for...in")
for(var iIndex in ArrMeanStack)
  console.log(ArrMeanStack[iIndex])
console.log("\nWith for...of")
for(var strData of ArrMeanStack)
  console.log(strData);

console.log("\n With for loop iteration using length");

for(var iData=0;iData<ArrMeanStack.length;++iData)
  console.log(ArrMeanStack[iData])



