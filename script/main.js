//-----------------------------------------------------------------
//17. Scope, ES6 and let
var a = 2;
var b = 5;
if(a< b){
    let c = true;
}
// let asht pothuaj si var ne javascript es6
console.log(c);// Returns error
let d = 11;
console.log(d); // kthen vler

//-----------------------------------------------------------------
//16. The Scope Chain
//function b(){
//    console.log(myVar);
//}
//function a(){
//
//    var myVar =2;
//    b();
//}
//var myVar = 1;
//a();

//----------------------------------------------------------------

// Lesen 15 Functions, Context and Variable
//function b(){
//    var myVar;
//    console.log(myVar);
//}
//function a(){
//    var myVar = 2;
//    console.log(myVar);
//    b();
//}
//var myVar = 1;
//
//console.log(myVar);
//a();
//console.log(myVar);

//---------------------------------------------------------------

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
//----------------------------------------------------------------
