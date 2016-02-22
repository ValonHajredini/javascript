//----------------------------------------------------------------------

// Lesen 15 Functions, Context and Variable
function b(){
    var myVar;
    console.log(myVar);
}
function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}
var myVar = 1;

console.log(myVar);
a();
console.log(myVar);

//----------------------------------------------------------------------

// Lesen 14.
//function b(){
//    console.log("Called me!");
//}
//b();
//
//
//function a(){
//    b();
//};
//a();
//----------------------------------------------------------------------
