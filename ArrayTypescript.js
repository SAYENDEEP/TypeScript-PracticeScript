var ArrMeanStack = new Array("Mongo", "Express", "Angular", "Node");
console.log("With for...in");
for (var iIndex in ArrMeanStack)
    console.log(ArrMeanStack[iIndex]);
console.log("With for...of");
for (var _i = 0, ArrMeanStack_1 = ArrMeanStack; _i < ArrMeanStack_1.length; _i++) {
    var strData = ArrMeanStack_1[_i];
    console.log(strData);
}
console.log("\n With for loop iteration using length");
for (var iData = 0; iData < ArrMeanStack.length; ++iData)
    console.log(ArrMeanStack[iData]);
